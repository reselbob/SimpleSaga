"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Randomizer = void 0;
const faker_1 = require("@faker-js/faker");
class Randomizer {
    static getRandomCustomer() {
        const firstName = faker_1.faker.person.firstName();
        const lastName = faker_1.faker.person.lastName();
        const email = `${firstName}.${lastName}@${faker_1.faker.internet.domainName()}`;
        const phoneNumber = faker_1.faker.phone.number();
        const creditCard = faker_1.faker.finance.creditCardNumber();
        return {
            firstName,
            lastName,
            email,
            phoneNumber,
            creditCard,
        };
    }
}
exports.Randomizer = Randomizer;
//# sourceMappingURL=Randomizer.js.map