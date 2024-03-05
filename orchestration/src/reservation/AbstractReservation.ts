import {ICustomer} from './ICustomer';
import {IConfirmation} from './IConfirmation';
import {v4 as uuidv4} from 'uuid';
import * as emoji from 'node-emoji';

export abstract class AbstractReservation {
  public async reserve(customer: ICustomer): Promise<IConfirmation> {
    // create a random number either 0, 1 or 2
    const random = Math.floor(Math.random() * 3);
    if (random === 0)
      throw new Error(
        `Oh no! Something went wrong in ${this.constructor.name}!\n`
      );

    const str = `Making ${this.constructor.name} reservation for customer ${customer.firstName} ${customer.lastName}`;
    console.log(str);
    return {
      uuid: uuidv4(),
      confirmationDate: new Date(),
      reservation: this,
    };
  }
  public async compensate(): Promise<void> {
    // Console.log the class name
    console.log(
      `${emoji.get('skull')} Compensating ${this.constructor.name} reservation`
    );
  }
}
