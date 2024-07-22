import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { AcebaseService } from 'src/acebase/acebase.service';
import { RoundsService } from 'src/rounds/rounds.service';

@Injectable()
export class ChartsService implements OnModuleDestroy, OnModuleInit {
  constructor(
    private readonly aceBaseService: AcebaseService,
    private readonly roundsService: RoundsService,
  ) {}
  onModuleDestroy() {}
  async onModuleInit() {
    console.info("Before pause, we'll create the first round");
    const round = await this.roundsService.createRounds();
    // wait for 30 seconds

    const updatedRound = await this.roundsService.updatedRounds(round.round, {
      canJoinBet: false,
    });
    const startPrice = 0;
    const targetPrice = this.generateRandomNumber(100, 1000);
    const steps = 50;
    const volatility = 0.1;
    if (updatedRound.betsHasEnded)
      await this.roundsService.updatedRounds(round.round, {
        canJoinBet: false,
        chartTarget: targetPrice,
        chart: this.generateChartData(
          startPrice,
          targetPrice,
          steps,
          volatility,
        ),
        currentIndex: 0,
      });
  }

  //on init create first round
  // wait for 30 sends
  // say all bets are done
  // use the bettor data to create the chart target
  // then use the chart target to create the chart
  // save current index also

  // once
  // check chart price and get paid

  generateChartData(startPrice, targetPrice, steps, volatility) {
    console.info(
      'Generating chart data',
      startPrice,
      targetPrice,
      steps,
      volatility,
    );
    let data = [];
    let currentPrice = startPrice;
    let stepSize = (targetPrice - startPrice) / steps;
    let hasDecremented = 0;

    for (let i = 0; i <= steps; i++) {
      // Calculate percentage progress
      let percentProgress = (i / steps) * 100;

      // Add some randomness to the price movement
      let randomFactor = 1 + (Math.random() * volatility * 2 - volatility);

      // Decide if we should decrement
      if (hasDecremented < 2 && Math.random() < 0.1 && i > 0 && i < steps - 1) {
        currentPrice *= 0.9; // Decrease by 10%
        hasDecremented++;
      } else {
        currentPrice += stepSize * randomFactor;
      }

      // Ensure price doesn't go below 0
      currentPrice = Math.max(0, currentPrice);

      // Cap the price at targetPrice
      currentPrice = Math.min(currentPrice, targetPrice);

      // Add data point
      data.push({
        percent: percentProgress.toFixed(2),
        price: currentPrice.toFixed(2),
      });

      // If we've reached the target, break the loop
      if (currentPrice >= targetPrice) {
        break;
      }
    }

    // Add final point where price drops to zero
    data.push({
      percent: '100.00',
      price: '0.00',
    });

    return data;
  }
  generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
