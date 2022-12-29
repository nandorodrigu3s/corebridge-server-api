import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloJesus(): string {
    return process.env.JWT_SECRET;
  }
}
