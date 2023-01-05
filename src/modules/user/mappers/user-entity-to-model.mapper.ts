import { UserEntity } from '../datasource/mongo/user.schema.mongo';
import { UserModel } from '../model/user.model';

export class UserEntityToModelMapper {
  mapOne(userEntity: any): UserModel | null {
    if (!userEntity) return null;
    const userModel: UserModel = {
      userId: userEntity.id,
      username: userEntity._doc.username,
      firstName: userEntity._doc.firstName,
      lastName: userEntity._doc.lastName,
      password: userEntity._doc.password,
      assets: userEntity._doc.assets,
    };

    return userModel;
  }
}
