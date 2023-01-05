import { Injectable } from '@nestjs/common';
import { CreateCartInput } from './datasource/graphql/types/create-cart.input-type.graphql';
import { UpdateCartInput } from './datasource/graphql/types/update-cart.input-type.graphql';

@Injectable()
export class CartService {
  create(createCartInput: CreateCartInput) {
    return 'This action adds a new cart';
  }

  findAll() {
    return `This action returns all cart`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartInput: UpdateCartInput) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
