import { registerEnumType } from '@nestjs/graphql';

export enum UpdateCartType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

registerEnumType(UpdateCartType, {
  name: 'UpdateCartType',
});
