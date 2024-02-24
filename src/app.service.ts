import { Injectable } from '@nestjs/common';
import { ApplicationConfig } from '@nestjs/core';
import { HttpService } from './axios.services';


@Injectable()
export class AppService {
  constructor(private readonly axiosService: HttpService) { }

  async getQuote(param : string): Promise<string> {
   const response = await this.axiosService.getInstance().get("/quotes?category=" + param)
   return response.data
  }
}



