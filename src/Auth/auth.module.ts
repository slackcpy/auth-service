import { env } from 'process';
import { Module } from '@nestjs/common';
import { AuthResolvers } from './auth.resolvers';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.startegy';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: "1234",
      signOptions: { expiresIn: '7d' },
    }),
    ClientsModule.register([{
      name: 'USERS_CLIENT',
      transport: Transport.TCP,
      options: {
        host: 'users-service',
        port: 4000
      }
    }])
  ],
  providers: [AuthResolvers, AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}