// import { Injectable } from '@nestjs/common';
// import { UserEntity } from '../datasource/mongo/user.schema.mongo';
// import { UserEntityToModelMapper } from '../mappers/user-entity-to-model.mapper';
// import { UserModel } from '../model/user.model';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';

// @Injectable()
// export class UserRepository {
//   private userModel: Model<UserEntity>;
//   constructor(@InjectModel('users') userModel: Model<UserEntity>) {
//     this.userModel = userModel;
//   }
//   private userEntityToModelMapper: UserEntityToModelMapper =
//     new UserEntityToModelMapper();

//   async findUserByUserId(userId: string): Promise<UserModel> {
//     const userEntity: UserEntity = await this.userModel.findById({
//       id: userId,
//     });
//     const userModel: UserModel =
//       this.userEntityToModelMapper.mapOne(userEntity);

//     return userModel;
//   }
// }
