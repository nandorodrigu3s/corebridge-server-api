import { CartModel } from '../models/cart.model';

export class CartEntityToModelMapper {
  mapOne(cartEntity: any): CartModel {
    if (!cartEntity) return null;
    const cartModel: CartModel = {
      nfts: cartEntity.nfts || [],
    };

    return cartModel;
  }
}
