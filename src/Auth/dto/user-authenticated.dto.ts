import { ObjectType, Field, Directive } from '@nestjs/graphql';
import { User } from '../gqlTypes/user.gqltype';

@ObjectType()
export class UserAuthenticated {
  @Field()
  @Directive(`@provides(fields: "id email password lastName firstName")`)
  user: User
}