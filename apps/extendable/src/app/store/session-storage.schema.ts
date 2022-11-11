import { User } from '@shared/models/users/user.model';

export interface SessionStorageSchema {
  user: User;
  jwt: string;
}
