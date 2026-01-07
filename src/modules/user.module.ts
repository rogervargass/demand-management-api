import { Module } from '@nestjs/common';
import { DatabaseModule } from '../infra/database/database.module';
import { USER_EXPORTS, USER_PROVIDERS } from './user.providers';

@Module({
  imports: [DatabaseModule],
  providers: USER_PROVIDERS as unknown as any[],
  exports: USER_EXPORTS as unknown as any[],
})
export class UserModule {}
