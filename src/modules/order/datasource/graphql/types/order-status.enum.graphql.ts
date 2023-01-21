import { registerEnumType } from '@nestjs/graphql';

export enum OrderStatusType {
  COMPLETE = 1,
  PENDING = 2,
  CANCELED = 3,
  FAILED = 4,
}

registerEnumType(OrderStatusType, {
  name: 'OrderStatusType',
});
