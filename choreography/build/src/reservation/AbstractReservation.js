"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractReservation = void 0;
const uuid_1 = require("uuid");
class AbstractReservation {
    nextReservation;
    AbstractReservation(nextReservation) {
        this.nextReservation = nextReservation;
    }
    async reserve(customer) {
        const str = `Making ${this.constructor.name} reservation for customer ${customer.firstName} ${customer.lastName}`;
        console.log(str);
        if (this.nextReservation) {
            try {
                await this.nextReservation.reserve(customer);
            }
            catch (e) {
                throw new Error(`Failed to make ${this.nextReservation.constructor.name} reservation: ${e.message}`);
            }
        }
        return {
            uuid: (0, uuid_1.v4)(),
            confirmationDate: new Date(),
            reservation: this,
        };
    }
    async compensate() {
        // Console.log the class name
        console.log(`Compensating ${this.constructor.name} reservation`);
    }
}
exports.AbstractReservation = AbstractReservation;
//# sourceMappingURL=AbstractReservation.js.map