import { UserMongoDbDatasourceInterface } from '../datasource/mongo/user.db-datasource.interface.mongo';
import { UserEntity } from '../datasource/mongo/user.schema.mongo';
import { UserEntityToModelMapper } from '../mappers/user-entity-to-model.mapper';
import { UserModel } from '../model/user.model';

export class UserRepository {
  constructor(protected dbDatasource: UserMongoDbDatasourceInterface) {}
  private userEntityToModelMapper: UserEntityToModelMapper =
    new UserEntityToModelMapper();

  async findUserByUserId(userId: string): Promise<UserModel> {
    const userEntity: UserEntity = await this.dbDatasource.findByUserId(userId);
    const userModel: UserModel =
      this.userEntityToModelMapper.mapOne(userEntity);

    return userModel;
  }
}
