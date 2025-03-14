import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';

@Injectable()
export class FakeDataService {
  generateFakeUser(id: number) {
    return {
      id: id,
      level: faker.person.jobTitle(),
      uid: id,
      user: faker.person.fullName(),
      password: faker.word.conjunction(),
    };
  }

  generateFakeUsers(count: number) {
    const users = [];
    for (let i = 0; i < count; i++) {
      users.push(this.generateFakeUser(i));
    }
    return users;
  }
}
