import { SetMetadata } from '@nestjs/common';

// TODO change key?
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
