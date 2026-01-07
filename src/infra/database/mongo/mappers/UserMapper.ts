import { User } from '../../../../domain/entities/User';
import { Email } from '../../../../domain/value-objects/Email';
import { UserDocument } from '../schemas/user.schema';

export class UserMapper {
  static toPersistence(user: User) {
    return {
      _id: user.id,
      name: user.fullName,
      email: user.email.getValue,
      active: user.active,
      createdAt: user.currentState.createdAt,
    };
  }

  static toDomain(raw: UserDocument): User {
    return new User({
      id: raw._id,
      fullName: raw.name,
      email: new Email(raw.email),
      active: raw.active,
      createdAt: raw.createdAt,
    });
  }
}
