import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
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
  ): Promise<Cart | null> {
    const { user } = context?.req;
    const createCartModel = this.createCartInputToModelMapper.mapOne(
      createCartInput,
      user.userId,
    );
    const cart = await this.cartService.create(createCartModel);
    if (!cart) {
      throw new Error('caramba manow, deu alguam treta aqui rsrsrs!!');
    }
    return cart;
  }

  @Query(() => [Cart], { name: 'cart' })
  findAll() {
    return this.cartService.findAll();
  }

  @Query(() => Cart, { name: 'cart' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cartService.findOne(id);
  }

  @Mutation(() => Cart)
  updateCart(@Args('updateCartInput') updateCartInput: UpdateCartInput) {
    return this.cartService.update(1, updateCartInput.nft);
  }

  @Mutation(() => Cart)
  removeCart(@Args('id', { type: () => Int }) id: number) {
    return this.cartService.remove(id);
  }
}
