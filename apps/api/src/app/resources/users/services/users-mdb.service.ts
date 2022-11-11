import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../models/user.model';
import { CreateUserDto } from '@models/users/create-user-dto.model';

@Injectable()
export class UsersMdbService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  public async create(createUserDto: CreateUserDto): Promise<User> {
    return new this.userModel(createUserDto).save();
  }

  public async findOne(email: string) {
    return this.userModel.findOne({ email }).exec();
  }
}
