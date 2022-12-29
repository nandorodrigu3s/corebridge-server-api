import { Injectable } from '@nestjs/common';
import { User } from './model/user.model';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      firstName: 'Balakun ',
      lastName: 'Trimbanum',
      assets: 9,
      password: 'plaft!@$##65G654',
      userId: 12,
      username: 'bronks',
    },
    {
      firstName: 'Aleikan ',
      lastName: 'Trimbanum',
      assets: 19,
      password: '!$pla#tyusta654',
      userId: 2,
      username: 'bronks1',
    },
    {
      firstName: 'Hamanam ',
      lastName: 'Trimbanum',
      assets: 96,
      password: 'plaft!KN54',
      userId: 1,
      username: 'bronks2',
    },
    {
      firstName: 'Vatanuk ',
      lastName: 'Trimbanum',
      assets: 37,
      password: 'i$#4dalDL$Askj@5',
      userId: 121,
      username: 'bronks3',
    },
  ];

  async getUserByUsername(username: string): Promise<User> {
    return await this.users.find((item) => item.username.includes(username));
  }

  async getUserByID(id: number): Promise<User> {
    return await this.users.find((item) => item.userId === id);
  }
}
