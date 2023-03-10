import { Field, ID, InputType, ObjectType } from "@nestjs/graphql"
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {Book} from "../book/book.schema"
import * as mongoose from "mongoose"

export type AuthorDocument = Author & mongoose.Document
@Schema()
@ObjectType()
export class Author {
  @Field(() => ID) // <-- GraphQL type
  _id: string // <-- TypeScript type

  @Prop()
  @Field()
  name: string

  @Prop({type: {type: mongoose.Schema.Types.ObjectId, ref: "Book"}})
  @Field(() => [Book])
  books: Book[]
}

export const AuthorSchema = SchemaFactory.createForClass(Author)

@InputType()
export class CreateAuthorInput {
  @Field()
  name: string
}