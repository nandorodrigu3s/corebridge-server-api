import { Injectable } from '@nestjs/common';
import { CreateCustomerInput } from './graphql/types/create-customer.input';
import { UpdateCustomerInput } from './graphql/types/update-customer.input';

@Injectable()
export class CustomerService {
  create(createCustomerInput: CreateCustomerInput) {
    return 'This action adds a new customer';
  }

  findAll() {
    return `This action returns all customer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerInput: UpdateCustomerInput) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
