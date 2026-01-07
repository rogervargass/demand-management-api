import { Schema, Document } from 'mongoose';

export interface UserDocument extends Document<string> {
  _id: string;
  name: string;
  email: string;
  active: boolean;
  createdAt: Date;
}

export const UserSchema = new Schema<UserDocument>(
  {
    _id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    active: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  },
);
