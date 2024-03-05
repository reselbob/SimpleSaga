# Running the Saga Pattern using the Orchestration approach

|IMPORTANT|
|---------|
|Make sure you've installed all the dependencies and libraries required to run a Typescript project. Run the following command to install Typescript:<br><br>`npm install --save-dev typescript`|

The project demonstrates using the Saga pattern to manage a distributed transaction using the orchestration style. The use case scenario for a travel service. The service allows a user to reserve a flight, a hotel, and a car rental. If any one of reservation fails, that reservation and all the previous reservations must be rolled back as if the reservations never happened.

![saga-01-orchestration](https://github.com/reselbob/SimpleSaga/assets/1110569/09a3aece-a140-4ce7-9efe-97c9c0cf2e4a)


Presently, reservation behavior is nothing more than console log output. This is the same is true for compensation behavior.

This demonstration project uses the Orchestration approach to implement the Saga pattern. The way the demonstration works is that the code will randomly fail in error in tone of the reservation steps. The Saga pattern will ensure that the system is left in a consistent state by then running one or more compensating transactions.

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

```test
Making AirlineReservation reservation for customer Veda Zieme
Making HotelReservation reservation for customer Veda Zieme
💀 Compensating CarRentalReservation reservation
💀 Compensating HotelReservation reservation
💀 Compensating AirlineReservation reservation
Error: Car rental reservation failed
    at /Users/reselbob/Projects/SimpleSaga/orchestration/src/App.ts:37:11
    at processTicksAndRejections (node:internal/process/task_queues:95:5)

```
