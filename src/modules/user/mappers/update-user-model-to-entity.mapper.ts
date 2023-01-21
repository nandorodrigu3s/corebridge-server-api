import { UserModel } from '../models/user.model';

export class UpdateUserModelToEntityMapper {
  async mapOne(userModel: UserModel) {
    const { password, ...rest } = userModel;
    const userEntity = {
      ...rest,
      countAssets: userModel.wallet?.length || 0,
    };
    return userEntity;
  }
}
