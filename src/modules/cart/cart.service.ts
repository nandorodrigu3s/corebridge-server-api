import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NFTData } from '../../system/models/nft-data.model';
import { CartEntity } from './datasource/mongo/cart.schema.mongo';
import { CreateCartModelToEntityMapper } from './mappers/create-cart-model-to-entity.mapper';
import { CartEntityToModelMapper } from './mappers/cart-entity-to-model.mapper';
import { CreateCartModel } from './models/create-cart.model';
import { CartModel } from './models/cart.model';
import { UpdateCartModel } from './models/update-cart.model';
import { UpdateCartType } from './datasource/graphql/types/create-cart.enum.graphql';

@Injectable()
export class CartService {
  constructor(@InjectModel('carts') private cartModel: Model<CartEntity>) {}

  private createCartModelToEntityMapper: CreateCartModelToEntityMapper =
    new CreateCartModelToEntityMapper();
  private cartEntityToModelMapper: CartEntityToModelMapper =
    new CartEntityToModelMapper();

  async create(createCartModel: CreateCartModel): Promise<CartModel | null> {
    try {
      const cartEntity =
        this.createCartModelToEntityMapper.mapOne(createCartModel);
      if (!cartEntity) return null;
      const cartEntityCreated = (
        await this.cartModel.create(cartEntity)
      ).save();
      const cartModel = this.cartEntityToModelMapper.mapOne(cartEntityCreated);
      return cartModel;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  async getCart(userId: string): Promise<CartModel | null> {
    const cartEntity: any = await this.cartModel.findOne({ userId });
    if (!cartEntity) return null;
    const cartModel = this.cartEntityToModelMapper.mapOne(cartEntity);
    return cartModel;
  }

  async updateCart(
    userId,
    updateCartModel: UpdateCartModel,
  ): Promise<CartModel | null> {
    let cartEntity: any = await this.cartModel.findOne({ userId });
    if (!cartEntity) return null;
    const nfts = [...cartEntity.nfts];
    const tester = updateCartModel.type === UpdateCartType.ADD;
    let newNFTs = [];
    if (updateCartModel.type === UpdateCartType.ADD) {
      newNFTs = [...nfts, updateCartModel.nft];
      cartEntity = await this.cartModel.findOneAndUpdate(
        { userId },
        { nfts: newNFTs },
        { returnDocument: 'after' },
      );
    } else {
      newNFTs = nfts.filter(
        (item) => item.token_id !== updateCartModel.nft.token_id,
      );
      if (!newNFTs.length) {
        this.cartModel.deleteOne({ userId });
        cartEntity = null;
      } else {
        cartEntity = await this.cartModel.findOneAndUpdate(
          { userId },
          { nfts: newNFTs },
          { returnDocument: 'after' },
        );
      }
    }
    const cartModel = this.cartEntityToModelMapper.mapOne(cartEntity);
    return cartModel;
  }

  async deleteCart(userId: string): Promise<boolean> {
    try {
      const deleted: any = await this.cartModel.deleteOne({ userId });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
