import { CartEntity } from '../datasource/mongo/cart.schema.mongo';
import { CartModel } from '../models/cart.model';

export class CartEntityToModelMapper {
  mapOne(cartEntity: any): CartModel | null {
    if (!cartEntity) return null;
    const cartModel: CartModel = {
      nfts: cartEntity._doc.nfts,
    };

    return cartModel;
  }
}
