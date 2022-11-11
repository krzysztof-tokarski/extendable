import { createReducer, on } from '@ngrx/store';
import { USER_ACTIONS } from './user.actions';
import { UserState } from './user.state';

const initialState = {} as UserState;

export const userReducer = createReducer(
  initialState,
  on(USER_ACTIONS.SIGN_IN, (state, { user }) => {
    return { ...state, signedIn: user };
  }),
  on(USER_ACTIONS.SIGN_OUT, (state) => {
    return {
      ...state,
      signedIn: null,
    };
  })
);
