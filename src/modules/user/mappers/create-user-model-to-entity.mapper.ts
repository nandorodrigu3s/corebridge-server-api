import { CreateUserModel } from '../model/create-user.model';
import * as bcrypt from 'bcrypt';

export class CreateUserModelToEntityMapper {
  async mapOne(createUser: CreateUserModel) {
    const { password, ...rest } = createUser;
    // let userEntity = null;
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    const userEntity = {
      ...rest,
      password: passwordHash,
      assets: 0,
      createdAt: Date.now(),
    };
    // await bcrypt.genSalt(10, (errGen, salt) => {
    //   bcrypt.hash(password, salt, (errGen, passwordHash) => {
    //   });
    // });
    return userEntity;
  }
}
