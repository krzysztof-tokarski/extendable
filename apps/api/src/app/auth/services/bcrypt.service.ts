import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class BcryptService {
  public async comparePasswords(password: string, saltedPassword: string) {
    return bcrypt.compare(password, saltedPassword);
  }
}
