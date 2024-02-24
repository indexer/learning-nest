import { Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getQuote(param : string): Promise<string> {
    try {
      return this.appService.getQuote("happiness");  
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
