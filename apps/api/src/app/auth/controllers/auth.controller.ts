import { SignInUserDto } from '@models/users/sign-in-user-dto.model';
import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { Public } from '../constants/public-route.decorator';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  public async signIn(
    @Body() signInUserDto: SignInUserDto,
    @Res() res: Response,
    @Req() req
  ) {
    const payload = await this.authService.login(req.user);
    res.json(payload);
    res.send();
    // const validatedUser = this.authService.validateUser(signInUserDto);
    // if (req?.user === null)
    //   return this.authService.informThatCredentialsAreInvalid(res);
    // TODO
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // public getProfile(@Req() req) {
  //   return req.user;
  // }

  @Post('sign-out')
  public signOut(@Body() signInUserDto: SignInUserDto, @Res() res: Response) {}

  // @Post('sign-out')
  // public signOut(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
  //   this.usersService.findOne(createUserDto.email).then((queryResult) => {
  //     if (queryResult !== null) {
  //       res.status(HttpStatus.CONFLICT);
  //       res.statusMessage = 'User with this email already exists.';
  //       res.send();
  //       return;
  //     }

  //     this.usersService.create(createUserDto);
  //   });
  // }
}
