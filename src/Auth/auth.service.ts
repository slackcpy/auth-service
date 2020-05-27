import { Injectable, Inject } from '@nestjs/common';
import { User } from './gqlTypes/user.gqltype';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USERS_CLIENT') private readonly usersClient: ClientProxy,
    private readonly jwtService: JwtService
    ) {}

  async getUserByEmail(email: string): Promise <User> {
    const user = await this.usersClient
    .send({cmd: 'get_user_by_email'}, {email})
    .toPromise();
    return user
  }

  async validateUser(userEmail: string, pass: string): Promise<boolean> {
    const user = await this.getUserByEmail(userEmail);

    if(user && user.password === pass) {
      return true
    }
    return false
  }

  async login({email, password}: {email: string; password: string}) {
    const user = await this.getUserByEmail(email);
    const payload = { email: email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload)
    }
  }
}