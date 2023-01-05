import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CartService } from '../../../cart.service';
import { Cart } from '../types/cart.object-type.graphql';
import { CreateCartInput } from '../types/create-cart.input-type.graphql';
import { UpdateCartInput } from '../types/update-cart.input-type.graphql';

@Resolver(() => Cart)
export class CartResolver {
  constructor(private readonly cartService: CartService) {}

  @Mutation(() => Cart)
  createCart(@Args('createCartInput') createCartInput: CreateCartInput) {
    return this.cartService.create(createCartInput);
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
    return this.cartService.update(updateCartInput.id, updateCartInput);
  }

  @Mutation(() => Cart)
  removeCart(@Args('id', { type: () => Int }) id: number) {
    return this.cartService.remove(id);
  }
}
