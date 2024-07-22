import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { NewPriceEvent } from '../events/new-price.events';

@Injectable()
export class NewPriceEventListener {
  @OnEvent('newPrice.created')
  handleNewPriceEvents(event: NewPriceEvent) {
    // handle and process "OrderCreatedEvent" event
    console.log(event);
  }
}
