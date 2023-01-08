import { registerEnumType } from '@nestjs/graphql';
import { StatusType } from 'src/modules/order/models/status.enum';

registerEnumType(StatusType, {
  name: 'StatusType',
});
