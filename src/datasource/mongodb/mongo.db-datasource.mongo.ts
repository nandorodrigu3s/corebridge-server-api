import { Document, Model } from 'mongoose';

export abstract class MongoDBDataSource<Entity extends Document> {
  constructor(protected model: Model<Entity>) {
    this.model = new Model<Entity>();
  }
}
