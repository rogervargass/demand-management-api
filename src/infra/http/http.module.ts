import { Module } from '@nestjs/common';
import { UserModule } from '../../modules/user.module';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [UserModule],
  controllers: [UserController],
})
export class HttpModule {}
