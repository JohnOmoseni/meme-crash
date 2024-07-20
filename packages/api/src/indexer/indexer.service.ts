import { Injectable, OnModuleInit } from '@nestjs/common';
import { AcebaseService } from 'src/acebase/acebase.service';
import { BettorsService } from 'src/bettors/bettors.service';
import { Cell, Slice, Address } from 'ton';
const watchAddress = 'EQA2veDkV_wHV6itC03oMR_9XpDLafFop6tqcVtt_jiWQaHg';

function decodeInMsgBody(base64Body, transactionHash: string, sender) {
  try {
    // Parse the base64 body into a Cell
    const cell = Cell.fromBoc(Buffer.from(base64Body, 'base64'))[0];
    //console.log('Parsed cell:', cell.toString());

    // Begin parsing the cell
    const slice: Slice = cell.beginParse();

    let result: any = {};

    // Read the first 32 bits as the op (operation) code
    const op = BigInt(slice.readUint(32).toNumber());
    //console.log('Op code:', op, '0x785f977e');
    result.op = `0x${op.toString(16).padStart(8, '0')}`;

    // Based on the op code, we can try to decode the rest of the message
    if (op === 0n) {
      result.type = 'Text Comment';
      result.comment = slice.readRemainingBytes().toString('utf8');
    } else if (op === 0x18n) {
      result.type = 'Transfer TON';
      result.amount = slice.readCoins();
    } else if (op === 0x5fcc3d14n) {
      result.type = 'Deploy contract';
      result.queryId = slice.readUintNumber(64);
    } else if (op === 0x41785f97n) {
      // This is the op code from your example
      result.type = 'Unknown Operation (0x41785f97)';
    } else if (op === BigInt('0x785f977e')) {
      result.type = 'Predict';
      slice.skip(64);
      result.amount = slice.readCoins().toNumber();
      result.roundnumber = slice.readUint(64).toNumber();
      result.pred = slice.readUint(64).toNumber();
      result.txId = transactionHash;
      result.sender = sender;
    } else if (op === BigInt('0xf503fdc2')) {
      result.type = 'NewPredictionEvent';
      // slice.skip(32);
      result.amount = slice.readCoins().toNumber();
      result.roundnumber = slice.readUint(64).toNumber();
      result.pred = slice.readUint(64).toNumber();
      result.sender = slice.readAddress().toFriendly();
      result.txId = transactionHash;
    } else {
      result.type = 'Unknown Operation';

      // For unknown operations, we'll try to read common data types
    }

    return result;
  } catch (error) {
    return {
      type: 'Decoding Error',
      error: error.message,
      rawData: base64Body,
    };
  }
}

@Injectable()
export class IndexerService implements OnModuleInit {
  constructor(
    private readonly BettorService: BettorsService,
    private readonly aceBaseService: AcebaseService,
  ) {}
  async onModuleInit() {
    await this.startIndexer();
  }

  async startIndexer() {
    var requestOptions: any = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://testnet.toncenter.com/api/v3/transactions?account=EQA2veDkV_wHV6itC03oMR_9XpDLafFop6tqcVtt_jiWQaHg&limit=20&offset=0&sort=desc',
      requestOptions,
    )
      .then((response) => response.json())
      .then(async (result) => {
        //console.log({ result });
        const lastTx = result.transactions[0];

        const txActionSuccess = lastTx.description.action.success;
        const txCompute_phSucess = lastTx.description.compute_ph.success;
        const transactionHash = lastTx.hash;
        const inMsg = lastTx.in_msg;
        const sender = Address.parse(inMsg.source).toFriendly();
        const outMsg2 = lastTx.out_msgs[1];
        const messageContent = inMsg.message_content;

        if (txActionSuccess && txCompute_phSucess) {
          const bettors = await (await this.BettorService.findAll()).val();
          console.log({ bettors });
        }
      })
      .catch((error) => console.log('error', error));
  }
}
