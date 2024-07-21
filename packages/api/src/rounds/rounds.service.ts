import { Injectable, OnModuleInit } from '@nestjs/common';
import { AcebaseService } from 'src/acebase/acebase.service';

function objectToArrays(obj) {
  // Get the keys of the object
  const keys = Object.keys(obj);

  // Get the values of the object
  const values = Object.values(obj);

  // Return an object containing the keys and values arrays
  return { keys, values };
}
@Injectable()
export class RoundsService {
  constructor(private readonly aceBaseService: AcebaseService) {}
  async createRounds() {
    const data = (await this.aceBaseService.readData('rounds')).val();
    if (data) {
      const { keys } = objectToArrays(data);
      const newRoundNumber = keys.length + 1;
      const lastKey = keys[keys.length - 1];
      const lastRound = data[lastKey];
      if (lastRound && lastRound.betsHasEnded && lastRound.betsHasEnded) {
        const res = await this.aceBaseService.createDataIfNotExists(
          'rounds/' + newRoundNumber.toString(),
          {
            round: newRoundNumber.toString(),
            canJoinBet: true,
            betsHasEnded: false,
          },
          () => true,
        );
        return res;
      } else {
        return lastRound;
      }
    } else {
      const res = await this.aceBaseService.createDataIfNotExists(
        'rounds/' + '1',
        { round: (1).toString(), canJoinBet: true, betsHasEnded: false },
        () => true,
      );

      return res;
    }
  }
  async updatedRounds(rounds: number, updateObj: {}) {
    console.info('updating rounds', rounds, updateObj);
    const data = (await this.aceBaseService.readData('rounds')).val();

    const res = await this.aceBaseService.updateData(
      'rounds/' + rounds,
      updateObj,
    );
    return res;
  }
}
