import { Module } from '@nestjs/common';
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo"
import {GraphQLModule} from "@nestjs/graphql";
import { MongooseModule} from "@nestjs/mongoose"
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AuthorModule} from "./author/author.module"
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import * as dotenv from "dotenv"

dotenv.config()
const mongoURI = process.env.MONGO_URI

@Module({
  imports: [
    MongooseModule.forRoot(mongoURI),
    GraphQLModule.forRoot<ApolloDriverConfig>({driver: ApolloDriver, autoSchemaFile: "schema.gql"}),
    AuthorModule, 
    BookModule, UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}