import { SignInUserDto } from '@models/users/sign-in-user-dto.model';
import { SignInResponse } from '@models/users/sign-in-response.model';
import { HttpStatus, Injectable, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UsersMdbService } from '../../resources/users/services/users-mdb.service';
import { AuthErrorMessages } from '../error/auth-error-messages.enum';
import { JwtSignInPayload } from '../models/jwt-sign-in-payload.model';
import { BcryptService } from '../services/bcrypt.service';
import { UserSnippet } from '@models/users/user-snippet.model';

@Injectable()
export class AuthService {
  constructor(
    private bcryptService: BcryptService,
    private usersService: UsersMdbService,
    private jwtService: JwtService
  ) {}

  // TODO add type?
  public validateUser(signInUserDto: SignInUserDto): Promise<{
    id: string;
    email: string;
  }> {
    const queryResult = this.usersService
      .findOne(signInUserDto.email)
      .then((foundUser) => {
        if (foundUser === null) {
          return null;
        }

        const passwordMatch = this.bcryptService.comparePasswords(
          signInUserDto.password,
          foundUser.saltedPassword
        );

        if (!passwordMatch) {
          return null;
        }

        const { id, email } = foundUser;

        return { id, email };
      });

    return queryResult;
  }

  // TODO user type?
  public async login(user: UserSnippet): Promise<SignInResponse> {
    const payload: JwtSignInPayload = { email: user.email, sub: user.id };

    return {
      user: { email: user.email, id: user.id },
      jwt: this.jwtService.sign(payload),
    };
  }

  public informThatCredentialsAreInvalid(@Res() res: Response) {
    res.status(HttpStatus.NOT_FOUND);
    res.statusMessage = AuthErrorMessages.NOT_FOUND_USER_WITH_THESE_CREDENTIALS;
    res.send();
  }
}
