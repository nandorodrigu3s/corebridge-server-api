import { CreateOrderInput } from '../datasource/graphql/types/create-order.input-type.graphql';
import { CreateOrderModel } from '../models/create-order.model';
import { StatusType } from '../models/status.enum';

export class CreateOrderInputToModelMapper {
  mapOne(
    userId: string,
    createOrderInput: CreateOrderInput,
  ): CreateOrderModel | null {
    if (!createOrderInput) return null;
    const createOrderModel = {
      userId,
      ...createOrderInput,
      status: StatusType.COMPLETE,
    };
    return createOrderModel;
  }
}
