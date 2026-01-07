import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from '../../../application/dtos/user/create-user.dto';
import { CreateUser } from '../../../application/use-cases/user/create-user/create-user';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly createUser: CreateUser) {}

  @Post()
  @ApiOperation({
    summary: 'Cria um usuário',
    description: 'Faz o registro de um novo usuário',
  })
  async create(@Body() body: CreateUserDTO) {
    await this.createUser.execute(body);
    return { message: 'User created' };
  }
}
