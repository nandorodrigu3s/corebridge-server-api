import { CreateOrderInput } from '../datasource/graphql/types/create-order.input-type.graphql';
import { CreateOrderModel } from '../models/create-order.model';
import { OrderStatusType } from '../models/order-status.enum';

export class CreateOrderInputToModelMapper {
  mapOne(
    userId: string,
    createOrderInput: CreateOrderInput,
  ): CreateOrderModel | null {
    if (!createOrderInput) return null;
    const createOrderModel = {
      userId,
      ...createOrderInput,
      status: OrderStatusType.COMPLETE,
    };
    return createOrderModel;
  }
}
