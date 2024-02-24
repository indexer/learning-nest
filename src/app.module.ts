import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpService } from './axios.services';



@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,HttpService],

})
export class AppModule { }
