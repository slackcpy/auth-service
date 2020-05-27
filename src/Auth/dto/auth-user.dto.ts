import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AuthUserCredentials {
  @Field()
  email: string;

  @Field()
  password: string;
}