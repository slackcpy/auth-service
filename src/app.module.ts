import { cwd } from 'process';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './Auth/auth.module';

@Module({
  imports: [ 
    AuthModule,
    ConfigModule.forRoot(),
    GraphQLFederationModule.forRoot({
      autoSchemaFile: join(cwd(), 'src/schema.gql'),
      context: ({ req }) => ({ req }),      
    })
  ]
})
export class AppModule {}
