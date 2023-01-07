export interface UserModel {
  userId: string | number;
  username: string | null;
  firstName: string;
  lastName: string;
  password: string;
  assets: number;
}