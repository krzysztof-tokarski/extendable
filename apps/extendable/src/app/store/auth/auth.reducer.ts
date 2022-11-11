import { createReducer, on } from '@ngrx/store';
import { AUTH_ACTIONS } from './auth.actions';
import { AuthState } from './auth.state';

const initialState: AuthState = {
  isAuth: false,
};

export const authReducer = createReducer(
  initialState,
  on(AUTH_ACTIONS.SET_AUTH, (state) => {
    return {
      ...state,
      isAuth: true,
    };
  }),
  on(AUTH_ACTIONS.SET_UNAUTH, (state) => {
    return {
      ...state,
      isAuth: false,
    };
  })
);
