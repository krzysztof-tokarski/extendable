export interface CreateUserDto {
  email: string;
  saltedPassword: string;
  salt: string;
}
