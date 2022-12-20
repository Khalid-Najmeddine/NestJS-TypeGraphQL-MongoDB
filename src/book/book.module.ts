import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose"
import { Author, AuthorSchema } from 'src/author/author.schema';
import { AuthorService } from '../author/author.service';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';
import { Book, BookSchema } from './book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Book.name, schema: BookSchema}, {name: Author.name, schema: AuthorSchema}])
  ],
  providers: [BookResolver, BookService, AuthorService]
})
export class BookModule {}
