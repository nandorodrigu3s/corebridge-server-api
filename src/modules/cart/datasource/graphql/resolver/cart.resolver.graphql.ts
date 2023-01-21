import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UpdateCartModel } from '../../../models/update-cart.model';
import { GqlJWTAuthGuard } from '../../../../auth/guards/gql-jwt-auth.guard';
import { CartService } from '../../../cart.service';
import { CreateCartInputToModelMapper } from '../../../mappers/create-cart-input-to-model.graphql';
import { Cart } from '../types/cart.object-type.graphql';
import { CreateCartInput } from '../types/create-cart.input-type.graphql';
import { UpdateCartInput } from '../types/update-cart.input-type.graphql';

@Resolver()
export class CartResolver {
  constructor(private readonly cartService: CartService) {}
  private createCartInputToModelMapper: CreateCartInputToModelMapper =
    new CreateCartInputToModelMapper();

  @Mutation(() => Cart, { nullable: true })
  @UseGuards(GqlJWTAuthGuard)
  async createCart(
    @Args('createCartInput') createCartInput: CreateCartInput,
    @Context() context,
  ): Promise<Cart> {
    const { user } = context?.req;
    const createCartModel = this.createCartInputToModelMapper.mapOne(
      createCartInput,
      user.userId,
    );
    const cart = await this.cartService.create(createCartModel);
    if (!cart) {
      throw new Error(
        'caramba manow, deu alguma treta aqui no #CR0001 rsrsrs!!',
      );
    }
    return cart;
  }

  @Query(() => Cart, { nullable: true })
  @UseGuards(GqlJWTAuthGuard)
  async getCart(@Context() context) {
    const { user } = context?.req;
    const cart = await this.cartService.getCart(user.userId);
    if (!cart) {
      throw new Error(
        'caramba manow, deu alguma treta aqui no #CR0002 rsrsrs!!',
      );
    }
    return cart;
  }

  @Mutation(() => Cart, { nullable: true })
  @UseGuards(GqlJWTAuthGuard)
  async updateCart(
    @Args('updateCartInput') updateCartInput: UpdateCartInput,
    @Context() context,
  ): Promise<Cart | null> {
    try {
      const { user } = context.req;
      const updatedCart = await this.cartService.updateCart(
        user.userId,
        updateCartInput as UpdateCartModel,
      );
      if (!updatedCart) {
        throw new Error();
      }
      return updatedCart;
    } catch (error) {
      throw new Error(
        'caramba manow, deu alguma treta aqui no #CR0003 rsrsrs!!',
      );
    }
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlJWTAuthGuard)
  async deleteCart(@Context() context): Promise<boolean> {
    try {
      const { user } = context.req;
      const deletedCart = await this.cartService.deleteCart(user.userId);
      return deletedCart;
    } catch (error) {
      throw new Error(
        'caramba manow, deu alguma treta aqui no #CR0004 rsrsrs!!',
      );
    }
  }
}
