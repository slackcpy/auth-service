import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AuthUser {
  @Field()
  email: string;

  @Field()
  password: string;
}