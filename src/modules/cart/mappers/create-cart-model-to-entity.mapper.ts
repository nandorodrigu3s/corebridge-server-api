import { CreateCartModel } from 'src/modules/cart/models/create-cart.model';
import { CartEntity } from '../datasource/mongo/cart.schema.mongo';

export class CreateCartModelToEntityMapper {
  mapOne(createCartModel: CreateCartModel) {
    const { nfts, userId } = createCartModel;
    if (!nfts?.length) {
      return null;
    }
    const cartEntity = {
      userId,
      nfts,
    };
    return cartEntity;
  }
}
