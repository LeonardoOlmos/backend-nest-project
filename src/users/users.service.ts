import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './schema/user.schema';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ){}

  async createUser(userData: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(userData);
    return await newUser.save();
  }

  login(userData: any) {
    return 'This action login a user';
  }

  async getUsers(): Promise<User[]> {
    return this.userModel.find().lean();
  }

  async getUserById(userId: string): Promise<User> {
    return this.userModel.findById({_id: userId }).lean();
  }

  async updateUser(userId: string, userData: UpdateUserDto): Promise<User> {
    return this.userModel.updateOne({ _id: userId }, userData).lean();
  }

  async deleteUser(userId: string): Promise<User> {
    return this.userModel.deleteOne({ _id: userId }).lean();
  }
}
