import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { UsersMdbService } from '../services/users-mdb.service';
import { CreateUserDto } from '@models/users/create-user-dto.model';
import { Response } from 'express';
import { Public } from '../../../auth/constants/public-route.decorator';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersMdbService) {}

  @Public()
  @Post()
  public async createUser(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response
  ) {
    const query = await this.usersService.findOne(createUserDto.email);

    if (query !== null) {
      res.status(HttpStatus.CONFLICT);
      res.statusMessage = 'User with this email already exists.';
      res.send();
      return;
    }

    this.usersService.create(createUserDto).then(() => {
      res.status(HttpStatus.CREATED);
      res.send();
    });
  }
}
