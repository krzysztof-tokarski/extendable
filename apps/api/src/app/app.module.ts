import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { TodosModule } from './features/todos/todos.module';

@Module({
  imports: [
    MongooseModule.forRoot(environment.DB_CONNECTION_STRING),
    AuthModule,
    TodosModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
