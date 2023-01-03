import { Injectable } from '@nestjs/common';
import { UserMongoDbDatasource } from './datasource/mongo/user.db-datasource.mongo';
import { UserModel } from './model/user.model';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  private userRepository = new UserRepository(new UserMongoDbDatasource());
  private readonly users: UserModel[] = [
    {
      firstName: 'Balakun',
      lastName: 'Trimbanum',
      assets: 9,
      password: 'plaft!@$##65G654',
      userId: 12,
      username: 'bronks',
    },
    {
      firstName: 'Aleikan',
      lastName: 'Trimbanum',
      assets: 19,
      password: '!$pla#tyusta654',
      userId: 2,
      username: 'bronks1',
    },
    {
      firstName: 'Hamanam',
      lastName: 'Trimbanum',
      assets: 96,
      password: 'plaft!KN54',
      userId: 1,
      username: 'bronks2',
    },
    {
      firstName: 'Vatanuk',
      lastName: 'Trimbanum',
      assets: 37,
      password: 'i$#4dalDL$Askj@5',
      userId: 121,
      username: 'bronks3',
    },
  ];

  async getUserByUsername(username: string): Promise<UserModel> {
    return await this.users.find((item) => item.username.includes(username));
  }

  async getUserById(userId: number): Promise<UserModel> {
    return await this.users.find((item) => item.userId === userId);
  }

  async getByUserId(userId: string): Promise<UserModel> {
    return await this.userRepository.findUserByUserId(userId);
  }
}
