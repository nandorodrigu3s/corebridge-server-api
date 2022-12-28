import { Injectable } from '@nestjs/common';
import { User } from './model/user.model';

@Injectable()
export class UserService {
  private readonly users = [
    {
      firstName: 'Balakun ',
      lastName: 'Trimbanum',
      assets: 9,
      password: 'EUIhiUEhauiheaiheaHI654654df56saf5s4a6f4sa&*@&*!!@',
    },
    {
      firstName: 'Aleikan ',
      lastName: 'Trimbanum',
      assets: 19,
      password: 'EUIhiUEhauiheaiheaHI654654df56saf5s4a6f4sa&*@&*!!@',
    },
    {
      firstName: 'Hamanam ',
      lastName: 'Trimbanum',
      assets: 96,
      password: 'EUIhiUEhauiheaiheaHI654654df56saf5s4a6f4sa&*@&*!!@',
    },
    {
      firstName: 'Vatanuk ',
      lastName: 'Trimbanum',
      assets: 37,
      password: 'EUIhiUEhauiheaiheaHI654654df56saf5s4a6f4sa&*@&*!!@',
    },
  ];

  async getUserByName(firstName: string, password: string): Promise<User> {
    return await this.users.find((item) => item.firstName.includes(firstName));
  }
}
