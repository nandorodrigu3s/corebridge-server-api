import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from './datasource/mongo/user.schema.mongo';
import { CreateUserModelToEntityMapper } from './mappers/create-user-model-to-entity.mapper';
import { UserEntityToModelMapper } from './mappers/user-entity-to-model.mapper';
import { CreateUserModel } from './models/create-user.model';
import { UserModel } from './models/user.model';
// import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  // private userRepository = new UserRepository(new Model<UserEntity>());
  constructor(@InjectModel('users') private userModel: Model<UserEntity>) {}
  private createUserModelToEntity = new CreateUserModelToEntityMapper();
  private userEntityToModelMapper: UserEntityToModelMapper =
    new UserEntityToModelMapper();
  private readonly users: UserModel[] = [
    {
      firstName: 'Balakun',
      lastName: 'Trimbanum',
      countAssets: 9,
      password: 'plaft!@$##65G654',
      userId: 12,
      username: 'bronks',
      wallet: [],
    },
    {
      firstName: 'Aleikan',
      lastName: 'Trimbanum',
      countAssets: 19,
      password: '!$pla#tyusta654',
      userId: 2,
      username: 'bronks1',
      wallet: [],
    },
    {
      firstName: 'Hamanam',
      lastName: 'Trimbanum',
      countAssets: 96,
      password: 'plaft!KN54',
      userId: 1,
      username: 'bronks2',
      wallet: [],
    },
    {
      firstName: 'Vatanuk',
      lastName: 'Trimbanum',
      countAssets: 37,
      password: 'i$#4dalDL$Askj@5',
      userId: 121,
      username: 'bronks3',
      wallet: [],
    },
  ];

  async createUser(
    createUserModel: CreateUserModel,
  ): Promise<UserModel | null> {
    const userEntity = await this.createUserModelToEntity.mapOne(
      createUserModel,
    );
    if (!userEntity) return null;
    const userEntityCreated = new this.userModel(userEntity);
    const entityValues = await userEntityCreated.save();
    const userModel = this.userEntityToModelMapper.mapOne(entityValues);
    return userModel;
  }

  async getUserByUsername(
    username: string,
    hidePassword = true,
  ): Promise<UserModel | null> {
    const userEntity = await this.userModel.findOne({ username });
    const userModel = this.userEntityToModelMapper.mapOne(
      userEntity,
      hidePassword,
    );
    return userModel;
  }

  async getUserById(userId: number): Promise<UserModel> {
    return await this.users.find((item) => item.userId === userId);
  }

  async getByUserId(userId: string): Promise<UserModel> {
    return await this.userModel.findOne({ userId });
  }
}
