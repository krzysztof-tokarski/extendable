import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';

@Module({
  imports: [MongooseModule.forRoot(environment.DB_CONNECTION_STRING)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
