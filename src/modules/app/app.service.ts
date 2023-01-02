import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloJesus(): string {
    return 'Hi there, my loved JESUS!';
  }
}
