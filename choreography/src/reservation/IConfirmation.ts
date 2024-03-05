import {IReservation} from './IReservation';

export interface IConfirmation {
  uuid: string;
  confirmationDate: Date;
  reservation: IReservation;
}
