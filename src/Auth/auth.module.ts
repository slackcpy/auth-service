import { Module } from '@nestjs/common';
import { AuthResolvers } from './auth.resolvers';
import { AuthService } from './auth.service';

@Module({
  imports: [],
  providers: [AuthResolvers, AuthService]
})
export class AuthModule {}