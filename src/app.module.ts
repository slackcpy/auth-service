import { cwd } from 'process';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ 
    ConfigModule.forRoot(),
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(cwd(), 'src/schema.gql')  
  })
  ]
})
export class AppModule {}
