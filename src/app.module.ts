import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config"
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo"
import {GraphQLModule} from "@nestjs/graphql";
import { MongooseModule} from "@nestjs/mongoose"
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AuthorModule} from "./author/author.module"
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot("mongodb+srv://knajm574:12345@cluster0.oetx4qb.mongodb.net/?retryWrites=true&w=majority"),
    GraphQLModule.forRoot<ApolloDriverConfig>({driver: ApolloDriver, autoSchemaFile: "schema.gql"}),
    AuthorModule, 
    BookModule, UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}