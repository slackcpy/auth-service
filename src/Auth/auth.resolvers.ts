import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthUserCredentials } from './dto/auth-user.dto';
import { Token } from './gqlTypes/token.gqltype';
import { UserAuthenticated } from './dto/user-authenticated.dto';
import { UseGuards } from '@nestjs/common';
import { GqlLocalAuthGuard } from './guards/gql-local-auth.guard';

@Resolver('Auth')
export class AuthResolvers {
  constructor(private authService: AuthService) {};

  @UseGuards(GqlLocalAuthGuard)
  @Mutation(() => Token)
  async login(
    @Args('email') email: string,
    @Args('password') password: string
  ): Promise<Token> {
    return this.authService.login({email, password});
  }

}