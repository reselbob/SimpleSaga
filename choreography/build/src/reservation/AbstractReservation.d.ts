import { ICustomer } from './ICustomer';
import { IConfirmation } from './IConfirmation';
export declare abstract class AbstractReservation {
    private nextReservation;
    AbstractReservation(nextReservation: AbstractReservation | undefined): void;
    reserve(customer: ICustomer): Promise<IConfirmation>;
    compensate(): Promise<void>;
}
