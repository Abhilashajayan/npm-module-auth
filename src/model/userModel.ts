import mongoose, { Document, Model, Schema } from 'mongoose';

interface IUser {
  username: string;
  email: string;
  password: string;
}

export interface IUserModel extends IUser, Document {}

const userSchema = new mongoose.Schema<IUserModel>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel: Model<IUserModel> = mongoose.model<IUserModel>('User', userSchema);

export { UserModel };
