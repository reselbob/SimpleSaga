import {IConfirmation} from './IConfirmation';
import {ICustomer} from './ICustomer';

export interface IReservation {
  reserve(customer: ICustomer): Promise<IConfirmation>;
  compensate(): Promise<void>;
}
