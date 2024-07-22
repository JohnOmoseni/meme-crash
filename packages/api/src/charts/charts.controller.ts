import { Controller, Get } from '@nestjs/common';
import { ChartsService } from './charts.service';
import { RoundsService } from 'src/rounds/rounds.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NewPriceEvent } from './events/new-price.events';

@Controller('charts')
export class ChartsController {
  constructor(
    private readonly chartsService: ChartsService,
    private readonly roundsService: RoundsService,
    private eventEmitter: EventEmitter2,
  ) {}

  @Get('current-price')
  async getChart() {
    // get current round
    const round = await this.roundsService.getLatestRound();
    // get chart data
    const chartData = round.chart;
    // get current index
    const currentIndex = round.currentIndex;
    // get last index
    const lastIndex = chartData.length - 1;
    // updated chart with current index and increment current index
    if (currentIndex === lastIndex) {
    }
    const res = await this.roundsService.updatedRounds(round.round, {
      currentIndex: currentIndex + 1,
      currentPrice: chartData[currentIndex],
    });

    // emit chart price change
    const newPriceEvent = new NewPriceEvent();
    newPriceEvent.price = chartData[currentIndex].price;
    this.eventEmitter.emit('newPrice.created', newPriceEvent);
    return this.roundsService.excludeKeys(res, 'chart');
  }
}
