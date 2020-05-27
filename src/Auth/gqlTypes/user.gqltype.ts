import { ObjectType, Field, Directive, HideField } from '@nestjs/graphql'

@ObjectType()
@Directive('@extends')
@Directive(`@key(fields: "id")`)
export class User {
@Field()
@Directive('@external')
id: string;

@Field()
@Directive('@external')
email: string;

@Field()
@Directive('@external')
@HideField()
password: string;

@Field({nullable: true})
@Directive('@external')
lastName?: string;

@Field({nullable: true})
@Directive('@external')
firstName?: string;
}