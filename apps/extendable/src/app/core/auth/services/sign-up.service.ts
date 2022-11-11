import { Injectable } from '@angular/core';
import { AuthFormValue } from '../models/auth-form-value';
import { BcryptService } from './bcrypt.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(
    private bcrypt: BcryptService,
    private usersService: UsersService
  ) {}

  public processCreateUserAttempt(authFormValue: AuthFormValue) {
    const { password, email } = authFormValue;
    const { salt, saltedPassword } = this.bcrypt.hashPassword(password);

    this.usersService.createUser({ salt, saltedPassword, email });
  }
}
