import { CreateOrderModel } from '../models/create-order.model';
import { MongoOrderStatusType } from '../models/mongo-order-status.enum';

export class CreateOrderModelToEntityMapper {
  mapOne(createOrder: CreateOrderModel) {
    /**
     * enum mongo
     * [1] - COMPLETE
     * [2] - PENDING
     * [3] - CANCELED
     * [4] - FAILED
     */
    const enumMongoIndex = `[${createOrder.status}]`;
    const orderEntity = {
      ...createOrder,
      status: MongoOrderStatusType[enumMongoIndex],
    };
    return orderEntity;
  }
}
