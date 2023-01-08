import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderInput } from './datasource/graphql/types/create-order.input-type.graphql';
import { OrderInput } from './datasource/graphql/types/order.input-type.graphql';
import { OrderEntity } from './datasource/mongo/order.schema.mongo';

@Injectable()
export class OrderService {
  constructor(@InjectModel('carts') private cartModel: Model<OrderEntity>) {}

  create(urserId: string, createOrderInput: CreateOrderInput) {
    return 'ok, thanks!';
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, orderInput: OrderInput) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
