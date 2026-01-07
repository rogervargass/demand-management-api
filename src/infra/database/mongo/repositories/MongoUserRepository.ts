import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../../../domain/repositories/UserRepository';
import { User } from '../../../../domain/entities/User';
import { UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { UserMapper } from '../mappers/UserMapper';

@Injectable()
export class MongoUserRepository implements UserRepository {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<UserDocument>,
  ) {}

  async save(user: User): Promise<void> {
    await this.userModel.create(UserMapper.toPersistence(user));
  }

  async findById(id: string): Promise<User | null> {
    const userData = await this.userModel.findById(id).exec();

    if (!userData) return null;

    return UserMapper.toDomain(userData);
  }

  async findByEmail(email: string): Promise<User | null> {
    const userData = await this.userModel.findOne({ email }).exec();

    if (!userData) return null;

    return UserMapper.toDomain(userData);
  }
}
