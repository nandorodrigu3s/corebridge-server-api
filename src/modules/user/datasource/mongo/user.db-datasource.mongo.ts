import { Model } from 'mongoose';
import { MongoDBDataSource } from '../../../../datasource/mongodb/mongo.db-datasource.mongo';
import { UserMongoDbDatasourceInterface } from './user.db-datasource.interface.mongo';
import { User, UserEntity } from './user.schema.mongo';

// eslint-disable-next-line prettier/prettier
export class UserMongoDbDatasource extends MongoDBDataSource<UserEntity> implements UserMongoDbDatasourceInterface
{
  constructor() {
    super(new Model<UserEntity>());
  }
  async findByUserId(userId: string): Promise<UserEntity> {
    return this.model.findOne({ userId });
  }
}
