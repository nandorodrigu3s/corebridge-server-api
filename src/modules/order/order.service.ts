import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderEntity } from './datasource/mongo/order.schema.mongo';
import { CreateOrderEntityToModelMapper } from './mappers/create-order-entity-to-model.mapper';
import { CreateOrderModelToEntityMapper } from './mappers/create-order-model-to-entity.mapper';
import { CreateOrderModel } from './models/create-order.model';
import { OrderModel } from './models/order.model';

@Injectable()
export class OrderService {
  constructor(@InjectModel('orders') private orderModel: Model<OrderEntity>) {}
  private createOrderModelToEntityMapper: CreateOrderModelToEntityMapper =
    new CreateOrderModelToEntityMapper();
  private createOrderEntityToModelMapper: CreateOrderEntityToModelMapper =
    new CreateOrderEntityToModelMapper();

  async create(createOrderModel: CreateOrderModel): Promise<OrderModel> {
    const createOrderEntity =
      this.createOrderModelToEntityMapper.mapOne(createOrderModel);
    if (!createOrderEntity) return null;
    const entityBuilder = new this.orderModel(createOrderEntity);
    const orderEntity = await entityBuilder.save();
    const orderModel = this.createOrderEntityToModelMapper.mapOne(orderEntity);
    return orderModel;
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  // update(id: number, orderInput: OrderInput) {
  //   return `This action updates a #${id} order`;
  // }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
