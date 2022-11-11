import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './resources/todos/todos.module';
import { UsersModule } from './resources/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(environment.DB_CONNECTION_STRING),
    AuthModule,
    TodosModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
