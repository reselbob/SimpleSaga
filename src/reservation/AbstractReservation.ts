import {ICustomer} from './ICustomer';
import {IConfirmation} from './IConfirmation';
import {v4 as uuidv4} from 'uuid';

export abstract class AbstractReservation {
  public async reserve(customer: ICustomer): Promise<IConfirmation> {
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
    console.log(`Compensating ${this.constructor.name} reservation`);
  }
}
