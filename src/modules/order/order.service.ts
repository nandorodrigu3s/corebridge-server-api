import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from '../user/datasource/mongo/user.schema.mongo';
import { UpdateUserModelToEntityMapper } from '../user/mappers/update-user-model-to-entity.mapper';
import { UserService } from '../user/user.service';
import { OrderEntity } from './datasource/mongo/order.schema.mongo';
import { CreateOrderEntityToModelMapper } from './mappers/create-order-entity-to-model.mapper';
import { CreateOrderModelToEntityMapper } from './mappers/create-order-model-to-entity.mapper';
import { CreateOrderModel } from './models/create-order.model';
import { OrderStatusType } from './models/order-status.enum';
import { OrderModel } from './models/order.model';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('orders') private orderModel: Model<OrderEntity>,
    @InjectModel('users') private userModel: Model<UserEntity>,
  ) {}
  private createOrderModelToEntityMapper: CreateOrderModelToEntityMapper =
    new CreateOrderModelToEntityMapper();
  private createOrderEntityToModelMapper: CreateOrderEntityToModelMapper =
    new CreateOrderEntityToModelMapper();
  private updateUserModelToEntityMapper: UpdateUserModelToEntityMapper =
    new UpdateUserModelToEntityMapper();
  private userService: UserService = new UserService(this.userModel);

  async create(createOrderModel: CreateOrderModel): Promise<OrderModel> {
    const createOrderEntity =
      this.createOrderModelToEntityMapper.mapOne(createOrderModel);
    if (!createOrderEntity) return null;
    const entityBuilder = new this.orderModel(createOrderEntity);
    const orderEntity = await entityBuilder.save();
    const orderModel = this.createOrderEntityToModelMapper.mapOne(orderEntity);
    if (orderModel && orderModel.status === OrderStatusType.COMPLETE) {
      const { userId } = orderModel;
      const user = await this.userService.getByUserId(userId);
      user.wallet = orderModel.nfts;
      const newUserEntity = await this.updateUserModelToEntityMapper.mapOne(
        user,
      );
      await this.userModel.findOneAndUpdate(
        { userId },
        { ...newUserEntity },
        { returnDocument: 'after' },
      );
    }
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
