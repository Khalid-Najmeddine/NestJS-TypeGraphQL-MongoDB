import {get, set} from "lodash"
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
import { decode } from "./utilities/jwt.utilities";

dotenv.config()
const mongoDBConnectionString = process.env.MONGODB_CONNECTION_STRING

@Module({
  imports: [
    MongooseModule.forRoot(mongoDBConnectionString),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, 
      autoSchemaFile: "schema.gql",
      
      context: ({req, res}) => {
        const token = get(req, "cookies.token")
        const user = token ? decode(get(req, "cookies.token")) : null
        if (user) {
          set(req, "user", user)
        }
        return {req, res}
      }
    }),
    AuthorModule, 
    BookModule, UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}