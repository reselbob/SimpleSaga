"use strict";
// Create a new instance of the Airline, Hotel and CarRental classes in the App.ts file.
// can call the reserve method on each instance and log the result to the console.
Object.defineProperty(exports, "__esModule", { value: true });
const Airline_1 = require("./reservation/Airline");
const Hotel_1 = require("./reservation/Hotel");
const CarRental_1 = require("./reservation/CarRental");
const Randomizer_1 = require("./utils/Randomizer");
// Create an array named compensations that can hold the compensate() methods of the IReservation implementations
const compensations = [];
const customer = Randomizer_1.Randomizer.getRandomCustomer();
(async () => {
    const airline = new Airline_1.Airline();
    try {
        await airline.reserve(customer);
    }
    catch (e) {
        compensations.push(airline.compensate.bind(airline));
    }
    const hotel = new Hotel_1.Hotel();
    try {
        await hotel.reserve(customer);
    }
    catch (e) {
        compensations.push(hotel.compensate.bind(hotel));
    }
    const carRental = new CarRental_1.CarRental();
    try {
        await carRental.reserve(customer);
    }
    catch (e) {
        compensations.push(carRental.compensate.bind(carRental));
    }
})();
//# sourceMappingURL=App.js.map