import { UserModel } from "./model/userModel";
import { IUserModel } from "./model/userModel";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface IUser {
  username: string;
  email: string;
  password: string;
}

export const registerUser = async (userData: IUser): Promise<IUserModel> => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = new UserModel({
    username: userData.username,
    email: userData.email,
    password: hashedPassword,
  });
  return user.save();
};

export const loginUser = async (username: string, password: string, secretKey: string): Promise<string | null> => {
  const user = await UserModel.findOne({ username });
  if (user && await bcrypt.compare(password, user.password)) {
    const token = generateToken(user, secretKey);
    return token;
  }

  return null;
};

export const verifyToken = (token: string, secretKey: string): { userId: string; username: string; email: string } | null => {
  try {
    const decoded = jwt.verify(token, secretKey) as { userId: string; username: string; email: string };
    return decoded;
  } catch (error) {
    console.error('Error verifying token:', error);
    return null;
  }
};

const generateToken = (user: any, secretKey: string): string => {
  const token = jwt.sign(
    { userId: user._id, username: user.username, email: user.email },
    secretKey,
    { expiresIn: '1h' }
  );
  return token;
};
