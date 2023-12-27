import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './interface/user.interface';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() userData: CreateUserDto): Promise<IUser> {
    return this.usersService.createUser(userData);
  }

  @Post('/login')
  userLogin(@Body() userData: any) {
    return this.usersService.login(userData);
  }

  @Get()
  getUsers(): Promise<IUser[]> {
    return this.usersService.getUsers();
  }

  @Get('/:userId')
  getUser(@Param('userId') userId: string): Promise<IUser> {
    return this.usersService.getUserById(userId);
  }

  @Put('/:userId')
  updateUser(@Param('userId') userId: string, @Body() userData: UpdateUserDto): Promise<IUser> {
    return this.usersService.updateUser(userId, userData);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId') userId: string): Promise<IUser> {
    return this.usersService.deleteUser(userId);
  }

}
