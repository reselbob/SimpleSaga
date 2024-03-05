// Create a new instance of the Airline, Hotel and CarRental classes in the App.ts file.
// can call the reserve method on each instance and log the result to the console.

import {AirlineReservation} from './reservation/Airline';
import {HotelReservation} from './reservation/Hotel';
import {CarRentalReservation} from './reservation/CarRental';
import {Randomizer} from './utils/Randomizer';

const customer = Randomizer.getRandomCustomer();

(async () => {
  const airline = new AirlineReservation();
  const hotel = new HotelReservation();
  const carRental = new CarRentalReservation();

  try {
    await airline.reserve(customer);
  } catch (e) {
    await airline.compensate();
    throw new Error('Airline reservation failed');
  }

  try {
    await hotel.reserve(customer);
  } catch (e) {
    await hotel.compensate();
    await airline.compensate();
    throw new Error('Hotel reservation failed');
  }

  try {
    await carRental.reserve(customer);
  } catch (e) {
    await carRental.compensate();
    await hotel.compensate();
    await airline.compensate();
    throw new Error('Car rental reservation failed');
  }
})();
