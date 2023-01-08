import { CreateUserModel } from '../models/create-user.model';
import * as bcrypt from 'bcrypt';

export class CreateUserModelToEntityMapper {
  async mapOne(createUser: CreateUserModel) {
    const { password, ...rest } = createUser;
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    const userEntity = {
      ...rest,
      password: passwordHash,
      countAssets: 0,
      wallet: [],
    };
    return userEntity;
  }
}
