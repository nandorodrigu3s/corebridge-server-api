import { UserEntity } from '../datasource/mongo/user.schema.mongo';
import { UserModel } from '../model/user.model';

export class UserEntityToModelMapper {
  mapOne(userEntity: UserEntity): UserModel {
    const userModel: UserModel = {
      userId: 'Ddsad',
      username: 'dasdas',
      firstName: 'dasdsa',
      lastName: 'adsada',
      password: 'dasdas',
      assets: 0,
    };

    return userModel;
  }
}
