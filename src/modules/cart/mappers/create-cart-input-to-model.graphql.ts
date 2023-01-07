import { CreateCartModel } from 'src/modules/cart/models/create-cart.model';
import { CreateCartInput } from '../datasource/graphql/types/create-cart.input-type.graphql';

export class CreateCartInputToModelMapper {
  mapOne(
    createCartInput: CreateCartInput,
    userId: string,
  ): CreateCartModel | null {
    if (!createCartInput || !userId) {
      return null;
    }
    return {
      ...createCartInput,
      userId,
    };
  }
}
