import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';
import { get } from 'http';

@Injectable()
export class UsersService { 
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }
  
  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async updateUser(user: User) : Promise<User[]> {
    return await this.usersRepository.save(user).then(() => this.getUsers(), () => [])
  }
  
  
  async getUser(_id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: ["fullName"],
      where: [{ "id": _id }]
    });
  }

}
