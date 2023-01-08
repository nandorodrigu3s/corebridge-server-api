import { registerEnumType } from '@nestjs/graphql';
// import { UpdateCartType } from '../../../models/update-cart.enum';

export enum UpdateCartType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

registerEnumType(UpdateCartType, {
  name: 'UpdateCartType',
});
