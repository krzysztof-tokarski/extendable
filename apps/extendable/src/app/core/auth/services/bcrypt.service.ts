import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root',
})
export class BcryptService {
  public hashPassword(password: string) {
    const salt = bcrypt.genSaltSync();
    const saltedPassword = bcrypt.hashSync(password, salt);

    return { salt, saltedPassword };
  }
}
