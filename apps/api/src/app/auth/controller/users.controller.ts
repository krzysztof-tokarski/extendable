import { Body, Controller, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../models/user.model';

interface CreateUserDto {
  email: string;
  login: string;
  password: string;
}

@Controller('users')
export class UsersController {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  @Post()
  public addTodo(@Body() createUserDto: CreateUserDto) {
    return new this.userModel(createUserDto).save();
  }
}
