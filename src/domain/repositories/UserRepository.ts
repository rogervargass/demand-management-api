import { User } from '../entities/User';
import { BaseRepository } from './BaseRepository';

export interface UserRepository extends BaseRepository<User> {
  findByEmail(email: string): Promise<User | null>;
}
