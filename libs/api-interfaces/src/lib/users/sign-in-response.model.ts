import { UserSnippet } from './user-snippet.model';

export interface SignInResponse {
  user: UserSnippet;
  jwt: string;
}
