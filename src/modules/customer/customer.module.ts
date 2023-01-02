import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './graphql/resolver/customer.resolver';

@Module({
  providers: [CustomerResolver, CustomerService],
})
export class CustomerModule {}
