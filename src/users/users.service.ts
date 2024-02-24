import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) { }
  
  async getUsers(user: User): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async updateUser(user: User) : Promise<User[]> {
    this.usersRepository.save(user)
    return this.usersRepository.find()
  }
  
  
  async getUser(_id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: ["fullName"],
      where: [{ "id": _id }]
    });
  }

}
