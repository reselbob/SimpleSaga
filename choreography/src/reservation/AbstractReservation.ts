import {ICustomer} from './ICustomer';
import {IConfirmation} from './IConfirmation';
import {v4 as uuidv4} from 'uuid';
import * as emoji from 'node-emoji';

export abstract class AbstractReservation {
  private readonly nextReservation: AbstractReservation | null | undefined;
  constructor(nextReservation: AbstractReservation | null | undefined) {
    this.nextReservation = nextReservation;
  }

  public async reserve(customer: ICustomer): Promise<IConfirmation> {
    // create a random number either 0, 1 or 2
    const random = Math.floor(Math.random() * 3);
    if (random === 0)
      throw new Error(
        `${emoji.get('skull')} Oh no! Something went wrong in ${
          this.constructor.name
        }!\n`
      );

    const str = `Making ${this.constructor.name} reservation for customer ${customer.firstName} ${customer.lastName}\n`;
    console.log(str);
    if (this.nextReservation) {
      try {
        await this.nextReservation.reserve(customer);
      } catch (e: any) {
        console.log(`${e.message}`);
        await this.compensate();
        throw new Error(
          `Failed to make ${this.nextReservation.constructor.name} reservation.\n`
        );
      }
    }
    return {
      uuid: uuidv4(),
      confirmationDate: new Date(),
      reservation: this,
    };
  }
  public async compensate(): Promise<void> {
    // Console.log the class name
    console.log(`Compensating ${this.constructor.name} reservation`);
  }
}
