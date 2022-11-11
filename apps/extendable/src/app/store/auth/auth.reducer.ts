import { createReducer, on } from '@ngrx/store';
import { AUTH_ACTIONS } from './auth.actions';
import { AuthState } from './auth.state';

const initialState: AuthState = {
  isAuth: false,
  jwt: null,
};

export const authReducer = createReducer(
  initialState,
  on(AUTH_ACTIONS.SET_AUTH, (state, { jwt }) => {
    return {
      ...state,
      isAuth: true,
      jwt,
    };
  }),
  on(AUTH_ACTIONS.SET_UNAUTH, (state) => {
    return {
      ...state,
      isAuth: false,
      jwt: null,
    };
  })
);
