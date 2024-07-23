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
import { OnModuleInit } from '@nestjs/common';

@WebSocketGateway(3440, {})
export default class ChartGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnModuleInit
{
  @WebSocketServer() server: Server;
  onlineUser = 0;

  constructor(
    private readonly roundsService: RoundsService,
    private readonly chartService: ChartsService,
  ) {}
  async onModuleInit() {
    this.handleGetAndEmitChart();
  }
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
  //  @Interval(5000)
  async handleGetAndEmitChart() {
    try {
      await this.roundsService.getLatestRound().then(async (res) => {
        let round: any = res;
        console.log('here');
        const currentIndex = round['currentIndex'];
        let chart = round['chart'];
        round['chart'] = null;
        if (this.onlineUser > 0) {
          if (round && round['betsHasEnded'] === false) {
            console.log({ currentIndex }, chart.length);
            if (currentIndex <= chart.length) {
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
              await this.handleGetAndEmitChart();
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

              await this.handleGetAndEmitChart();
            }
          } else {
            console.log('no round', { round, currentIndex, chart });
            await this.roundsService.createRounds().then(async (res) => {
              await this.chartService.createChart().then(async (res) => {
                Promise.all([this.countdownTimer(30)]).then(() => {});
              });
            });
          }
        } else {
          console.log('searching for users');
          await this.handleGetAndEmitChart();
        }
      });
    } catch (error) {
      console.error({ error });
    }
  }

  private async countdownTimer(seconds) {
    let remainingSeconds = seconds;
    let status = 'ROUND_STARTING_30_SECONDS';

    const timer = setInterval(async () => {
      status = 'ROUND_STARTING_' + remainingSeconds + '_SECONDS'; // Update the DOM

      remainingSeconds--;
      // new Promise((resolve) => setTimeout(resolve, 3000));

      if (remainingSeconds < 0) {
        clearInterval(timer);
        status = 'ROUND_HAS_STARTED';
        await this.handleGetAndEmitChart();
      }
      this.server.emit('chart', {
        message: { status: status, round: null },
      });
    }, 1000);

    return timer;
  }
}
