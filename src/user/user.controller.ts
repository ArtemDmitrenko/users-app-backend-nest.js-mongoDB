import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('/api')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/addUser')
  create(@Body() dto: CreateUserDto) {
    return this.userService.create(dto);
  }

  @Get('/getUsers')
  getAll() {
    return this.userService.getAll();
  }
  @Get('/getUser/:id')
  getOne(@Param('id') id: ObjectId) {
    return this.userService.getOne(id);
  }
}
