import * as mongoose from 'mongoose';
import { UserSchema, type UserDocument } from './mongo/schemas/user.schema';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<mongoose.Connection> => {
      const uri = process.env.MONGO_URI ?? 'mongodb://localhost:27017/demands';
      const connection = await mongoose.connect(uri);
      return connection.connection;
    },
  },
  {
    provide: 'USER_MODEL',
    useFactory: (connection: mongoose.Connection) =>
      connection.model<UserDocument>('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
