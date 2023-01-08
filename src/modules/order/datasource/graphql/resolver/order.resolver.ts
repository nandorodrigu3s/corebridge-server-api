import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { GqlJWTAuthGuard } from 'src/modules/auth/guards/gql-jwt-auth.guard';
import { OrderService } from '../../../order.service';
import { CreateOrderInput } from '../types/create-order.input-type.graphql';
import { OrderInput } from '../types/order.input-type.graphql';
import { Order } from '../types/order.object-type.graphql.ts';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}

  @Mutation(() => Order, { nullable: true })
  @UseGuards(GqlJWTAuthGuard)
  async generateOrder(
    @Args('createOrderInput') createOrderInput: CreateOrderInput,
    @Context() context,
  ) {
    const { user } = context.req;
    return this.orderService.create(user.userId, createOrderInput);
  }

  @Query(() => [Order], { name: 'order' })
  findAll() {
    return this.orderService.findAll();
  }

  @Query(() => Order, { name: 'order' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.orderService.findOne(id);
  }

  // @Mutation(() => Order)
  // updateOrder(@Args('orderInput') orderInput: OrderInput) {
  //   return this.orderService.update(orderInput);
  // }

  @Mutation(() => Order)
  removeOrder(@Args('id', { type: () => Int }) id: number) {
    return this.orderService.remove(id);
  }
}
