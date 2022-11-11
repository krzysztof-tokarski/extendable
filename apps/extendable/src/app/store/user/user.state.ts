import { User } from '@shared/models/users/user.model';

export interface UserState {
  signedIn: User | null;
}
