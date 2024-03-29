import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity/user.entity';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Post()
  create(@Body() user: User) {
    return this.service.updateUser(user);
  }
}
