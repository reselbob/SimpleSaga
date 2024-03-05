import {faker} from '@faker-js/faker';
import {ICustomer} from '../reservation/ICustomer';

export class Randomizer {
  public static getRandomCustomer(): ICustomer {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = `${firstName}.${lastName}@${faker.internet.domainName()}`;
    const phoneNumber = faker.phone.number();
    const creditCard = faker.finance.creditCardNumber();

    return {
      firstName,
      lastName,
      email,
      phoneNumber,
      creditCard,
    };
  }
}
