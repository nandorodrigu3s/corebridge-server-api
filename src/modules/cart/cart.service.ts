import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NFTData } from '../../system/models/nft-data.model';
import { UserEntity } from '../user/datasource/mongo/user.schema.mongo';
import { CartEntity } from './datasource/mongo/cart.schema.mongo';
import { CreateCartModelToEntityMapper } from './mappers/create-cart-model-to-entity.mapper';
import { CartEntityToModelMapper } from './mappers/cart-entity-to-model.mapper';
import { CreateCartModel } from './models/create-cart.model';

@Injectable()
export class CartService {
  constructor(@InjectModel('carts') private cartModel: Model<CartEntity>) {}
  private createCartModelToEntityMapper: CreateCartModelToEntityMapper =
    new CreateCartModelToEntityMapper();
  private cartEntityToModelMapper: CartEntityToModelMapper =
    new CreateCartModelToEntityMapper();

  async create(createCartModel: CreateCartModel) {
    const cartEntity =
      this.createCartModelToEntityMapper.mapOne(createCartModel);
    if (!cartEntity) return null;
    const cartEntityCreated = new this.cartModel(cartEntity);
    const entityValues = await cartEntityCreated.save();
    const cartModel = this.cartEntityToModelMapper.mapOne(entityValues);
    return cartModel;
  }

  findAll() {
    return `This action returns all cart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, nfts: NFTData) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
