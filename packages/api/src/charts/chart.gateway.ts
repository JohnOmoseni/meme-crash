import { Interval } from '@nestjs/schedule';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RoundsService } from 'src/rounds/rounds.service';
import { ChartsService } from './charts.service';

@WebSocketGateway(3440, {})
export default class ChartGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  onlineUser = 0;

  constructor(
    private readonly roundsService: RoundsService,
    private readonly chartService: ChartsService,
  ) {}
  handleConnection(client: Socket) {
    this.onlineUser++;
    console.log('new user online', client.id);
    // send  chart update
  }
  handleDisconnect(client: Socket) {
    this.onlineUser--;
    console.log('user offline', client.id);
  }
  @SubscribeMessage('chart')
  handleChart(client: Socket, data: any): any {
    console.log({ data, onlineUser: this.onlineUser });
    //
    return data;
  }
  @SubscribeMessage('online')
  handleOnline(@MessageBody() data: any): string {
    console.log({ data });
    //
    return data;
  }
  @Interval(5000)
  async handleGetAndEmitChart() {
    let round: {} = await this.roundsService.getLatestRound();

    if (this.onlineUser > 0) {
      if (round) {
        const currentIndex = round['currentIndex'];
        let chart = round['chart'];
        round['chart'] = null;

        if (currentIndex >= chart.length) {
          round['current_chart_prices'] = chart.slice(0, currentIndex);
          // remove the chart data

          // current Chart price
          this.server.emit('chart', {
            message: { status: 'ROUND_IS_STILL_ON', round },
          });
          this.server.emit('winners', {
            message: { status: 'ROUND_WINNERS', winners: '' },
          });
          this.server.emit('losers', {
            message: { status: 'ROUND_LOSERS', losers: '' },
          });
          await this.roundsService.updatedRounds(round['round'], {
            currentIndex: currentIndex + 1,
            current_chart_prices: chart[currentIndex],
          });
        } else {
          // create new round after 30 seconds
          await this.roundsService.updatedRounds(round['round'], {
            betsHasEnded: true,
          });

          console.log('no chart', {
            message: { status: 'ROUND_HAS_ENDED', round: null },
          });
          this.server.emit('chart', {
            message: { status: 'ROUND_HAS_ENDED', round: null },
          });
          this.countdownTimer(30);
          // create new round
          const res = await this.chartService.createChart();
          await this.handleGetAndEmitChart();
        }
      }
    }
  }

  private countdownTimer(seconds) {
    let remainingSeconds = seconds;
    let status = 'ROUND_STARTING_30_SECONDS';

    const timer = setInterval(() => {
      status = 'ROUND_STARTING_' + remainingSeconds + '_SECONDS'; // Update the DOM

      remainingSeconds--;

      if (remainingSeconds < 0) {
        clearInterval(timer);
        status = 'ROUND_HAS_STARTED';
      }
      this.server.emit('chart', {
        message: { status: status, round: null },
      });
    }, 1000);
  }
}
