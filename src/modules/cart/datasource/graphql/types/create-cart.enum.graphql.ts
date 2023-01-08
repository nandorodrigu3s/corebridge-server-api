import { registerEnumType } from '@nestjs/graphql';
import { UpdateCartType } from '../../../models/update-cart.enum';

registerEnumType(UpdateCartType, {
  name: 'UpdateCartType',
});
