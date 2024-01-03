import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hashPassword } from '../utils/bcrypt.utils';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly UsersRepository: Repository<User>
  ) { }

  async create(user: CreateUserDto): Promise<User> {
    const newUser = new User();
    const password = await hashPassword(user.password);
    user.password = password;
    Object.keys(user).forEach((key) => {
      newUser[key] = user[key];
    });

    try {

      return await this.UsersRepository.save(newUser);
      //  return await this.UsersRepository({ ...newUser, password }).save();
    } catch (err) {
      return err;
    }
  }


  async findAll(): Promise<User[]> {
    try {
      return await this.UsersRepository.find({});
    } catch (err) {
      return err;
    }
  }



  async findOne(id: string): Promise<User> {
    try {
      return await this.UsersRepository.findOneById(id);
    } catch (err) {
      return err;
    }
  }



  async update(oldUser: User, updated_values: UpdateUserDto): Promise<User> {
    const updatedUser = oldUser;
    const password = await hashPassword(updated_values.password);
    updated_values.password = password;
    Object.keys(updated_values).forEach((key) => {
      updatedUser[key] = updated_values[key];
    });

    try {
      return await this.UsersRepository.save(updatedUser);
    } catch (err) {
      return err;
    }

  }


  async remove(id: string) {
    try {
      return await this.UsersRepository.delete(id);
    } catch (err) {
      return err;
    }
  }
}
