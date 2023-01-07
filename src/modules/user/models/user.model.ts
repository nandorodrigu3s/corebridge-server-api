import { NFTData } from '../../../system/models/nft-data.model';

export interface UserModel {
  userId: string | number;
  username: string | null;
  firstName: string;
  lastName: string;
  password?: string;
  countAssets: number;
  wallet: NFTData[];
}
