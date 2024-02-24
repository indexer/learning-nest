import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) { }
  
  async getUsers(user: UserEntity): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async updateUser(user: UserEntity) {
    this.usersRepository.save(user)
  }
  
  
  async getUser(_id: number): Promise<UserEntity[]> {
    return await this.usersRepository.find({
      select: ["fullName"],
      where: [{ "id": _id }]
    });
  }

}
