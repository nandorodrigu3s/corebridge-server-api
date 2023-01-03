import { MongoDBDataSource } from '../../../../datasource/mongodb/mongo.db-datasource.mongo';
import { CartEntity } from './cart.schema.mongo';

export class CartDbDatasource extends MongoDBDataSource<CartEntity> {
  async findCart(id: string) {
    this.model.findOne({ userId: id });
  }
}
