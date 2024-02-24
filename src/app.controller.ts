import { Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getQuote(): string {
    return "Hello World"
  }

  @Get("/quote/happiness")
  async getHappinessQuote(): Promise<string> {
    try {
      return this.appService.getQuote("happiness");  
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Get("/quote/love")
  async getLoveQuote(): Promise<string> {
    try {
      return this.appService.getQuote("love");
    } catch (error) {
      throw new NotFoundException();
    }
  }

}
