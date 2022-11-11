import { createAction, props } from '@ngrx/store';

export const AUTH_ACTIONS = {
  SET_AUTH: createAction('[AUTH] Set Auth', props<{ jwt: string }>()),
  SET_UNAUTH: createAction('[AUTH] Set UnAuth'),
};
