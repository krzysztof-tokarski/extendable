import { AppRoute } from './app-route.enum';

export const RoutesMap: Record<keyof typeof AppRoute, RegExp> = {
  AUTH: /\/auth\/*/,
  AUTH_SIGN_UP: /\/auth\/sign-up/,
  AUTH_SIGN_IN: /\/auth\/sign-in/,
  // TODO
  APP: /\/auth\/login/,
  APP_TODAY: /\/auth\/login/,
};
