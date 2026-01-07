import { randomUUID } from 'crypto';

import { User } from '../../../../domain/entities/User';
import { Email } from '../../../../domain/value-objects/Email';
import { UserRepository } from '../../../../domain/repositories/UserRepository';
import { CreateUserDTO } from '../../../../application/dtos/user/create-user.dto';

export class CreateUser {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(data: CreateUserDTO): Promise<void> {
    console.log('Creating user with data:', data);
    const email = new Email(data.email);

    const user = new User({
      id: randomUUID(),
      fullName: data.name,
      email,
      active: true,
      createdAt: new Date(),
    });

    console.log('User created:', user);

    await this.userRepository.save(user);
  }
}
