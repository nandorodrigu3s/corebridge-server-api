import { UserEntity } from './user.schema.mongo';

export interface UserMongoDbDatasourceInterface {
  findByUserId(userId: string): Promise<UserEntity>;
}
