// Create a new instance of the Airline, Hotel and CarRental classes in the App.ts file.
// can call the reserve method on each instance and log the result to the console.

import {Airline} from './reservation/Airline';
import {Hotel} from './reservation/Hotel';
import {CarRental} from './reservation/CarRental';
import {Randomizer} from './utils/Randomizer';

// Create an array named compensations that can hold the compensate() methods of the IReservation implementations
const compensations: Array<() => Promise<void>> = [];

const customer = Randomizer.getRandomCustomer();

(async () => {
  const airline = new Airline();
  try {
    await airline.reserve(customer);
  } catch (e) {
    compensations.push(airline.compensate.bind(airline));
  }

  const hotel = new Hotel();
  try {
    await hotel.reserve(customer);
  } catch (e) {
    compensations.push(hotel.compensate.bind(hotel));
  }

  const carRental = new CarRental();
  try {
    await carRental.reserve(customer);
  } catch (e) {
    compensations.push(carRental.compensate.bind(carRental));
  }
})();
