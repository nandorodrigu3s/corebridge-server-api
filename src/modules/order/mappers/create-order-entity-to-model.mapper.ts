import { toFloatFixed } from '../../../system/utils/to-float-fixed.util';
import { OrderStatusType } from '../models/order-status.enum';
import { OrderModel } from '../models/order.model';

export class CreateOrderEntityToModelMapper {
  mapOne(createOrderEntity: any): OrderModel {
    if (!createOrderEntity) return null;
    const orderModel = {
      orderId: createOrderEntity._id,
      userId: createOrderEntity.userId,
      nfts: createOrderEntity.nfts,
      totalPayment: {
        label: createOrderEntity.totalPayment.label,
        value: toFloatFixed(createOrderEntity.totalPayment.value, 2),
      },
      status: OrderStatusType[`${createOrderEntity.status}`],
      discount: {
        label: createOrderEntity.discount.label,
        value: toFloatFixed(createOrderEntity.discount.value, 2),
      },
      canceledAt: createOrderEntity.canceledAt,
      createdAt: createOrderEntity.createdAt,
    };
    return orderModel;
  }
}
