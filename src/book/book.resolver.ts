import { Resolver, Query, Parent, ResolveField } from '@nestjs/graphql';
import { AuthorService } from 'src/author/author.service';
import { Author } from '../author/author.schema';
import { Book } from './book.schema';
import { BookService } from './book.service';
@Resolver(() => Book)
export class BookResolver {

  constructor(private bookService: BookService, private authorService: AuthorService) {}

  @Query(() => [Book]) //<-- what will the query return? 
  async books /* <-- Query Name*/ () { 
    return this.bookService.findMany() //Resolve the query
  }

  @ResolveField(() => Author)
  async author(@Parent() book: Book) {
    return this.authorService.findById(book.author)
  }


}
