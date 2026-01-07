import { type Provider } from '@nestjs/common';

import { CreateUser } from '../application/use-cases/user/create-user/create-user';
import { MongoUserRepository } from '../infra/database/mongo/repositories/MongoUserRepository';
import { USER_REPOSITORY } from './tokens';

export const USER_PROVIDERS: Provider[] = [
  {
    provide: USER_REPOSITORY,
    useClass: MongoUserRepository,
  },
  {
    provide: CreateUser,
    useFactory: (userRepository: MongoUserRepository) =>
      new CreateUser(userRepository),
    inject: [USER_REPOSITORY],
  },
];

export const USER_EXPORTS = [USER_REPOSITORY, CreateUser] as const;
