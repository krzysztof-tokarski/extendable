import { createAction } from '@ngrx/store';

export const AUTH_ACTIONS = {
  SET_AUTH: createAction('[AUTH] Set Auth'),
  SET_UNAUTH: createAction('[AUTH] Set UnAuth'),
};
