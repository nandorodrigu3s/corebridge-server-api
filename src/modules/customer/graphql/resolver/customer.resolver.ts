import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomerService } from '../../customer.service';
import { Customer } from '../types/customer.object-type.graphql';
import { CreateCustomerInput } from '../types/create-customer.input';
import { UpdateCustomerInput } from '../types/update-customer.input';

@Resolver(() => Customer)
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Mutation(() => Customer)
  createCustomer(
    @Args('createCustomerInput') createCustomerInput: CreateCustomerInput,
  ) {
    return this.customerService.create(createCustomerInput);
  }

  @Query(() => [Customer], { name: 'customer' })
  findAll() {
    return this.customerService.findAll();
  }

  @Query(() => Customer, { name: 'customer' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.customerService.findOne(id);
  }

  @Mutation(() => Customer)
  updateCustomer(
    @Args('updateCustomerInput') updateCustomerInput: UpdateCustomerInput,
  ) {
    return this.customerService.update(
      updateCustomerInput.id,
      updateCustomerInput,
    );
  }

  @Mutation(() => Customer)
  removeCustomer(@Args('id', { type: () => Int }) id: number) {
    return this.customerService.remove(id);
  }
}
