# Running the Saga Pattern using the Choreography approach

|IMPORTANT|
|---------|
|Make sure you've installed all the dependencies and libraries required to run a Typescript project. Run the following command to install Typescript:<br><br>`npm install --save-dev typescript`|

The project demonstrates using the Saga pattern to manage a distributed transaction using the choreography style. The use case scenario for a travel service. The service allows a user to reserve a flight, a hotel, and a car rental. If any one of reservation fails, that reservation and all the previous reservations must be rolled back as if the reservations never happened.

![saga-01-choreograph](https://github.com/reselbob/SimpleSaga/assets/1110569/a674e1d0-df47-4b17-b2d6-7872b965df93)


Presently, reservation behavior is nothing more than console log output. This is the same is true for compensation behavior.

As mentioned, this demonstration project uses the choreography approach to implement the Saga pattern. The way the demonstration works is that the code will randomly fail in error in tone of the reservation steps. The Saga pattern will ensure that the system is left in a consistent state by then running one or more compensating transactions.

To run the example, follow these steps:

1. Install the dependencies:

```bash
cd orchestration
npm install
```

2. Compile the code:

```bash
npm run compile
```

3. Run the code:

```bash
npm start
```

When a travel service fails, you'll get output similar to the following:

```text
Making AirlineReservation reservation for customer Erika Hudson

Making HotelReservation reservation for customer Erika Hudson

💀 Oh no! Something went wrong in CarRentalReservation!

Compensating HotelReservation reservation
Failed to make CarRentalReservation reservation.

Compensating AirlineReservation reservation
Failed to make HotelReservation reservation.


```
