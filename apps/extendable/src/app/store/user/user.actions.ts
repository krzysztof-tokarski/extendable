import { createAction, props } from '@ngrx/store';
import { User } from '@shared/models/users/user.model';

export class USER_ACTIONS {
  public static SIGN_IN = createAction(
    '[USER] Sign-in User',
    props<{ user: User }>()
  );

  public static SIGN_OUT = createAction('[USER] Sign-out User');
}
