import { UserModel } from '../models/user.model';

export class UserEntityToModelMapper {
  mapOne(userEntity: any, hidePassword = true): UserModel | null {
    if (!userEntity) return null;
    const userModel: UserModel = {
      userId: userEntity.id,
      username: userEntity.username,
      firstName: userEntity.firstName,
      lastName: userEntity.lastName,
      password: hidePassword ? '' : userEntity.password,
      countAssets: userEntity.countAssets,
      wallet: userEntity.wallet,
    };

    return userModel;
  }
}
