import { Query, ResolveField, Resolver, Parent } from '@nestjs/graphql';
import { BookService } from '../book/book.service';
import { AuthorService } from './author.service';
import { Author } from './author.schema';

@Resolver(() => Author)

export class AuthorResolver {
  constructor(private authorService: AuthorService, private bookService: BookService) {}

  @Query(() => [Author])
  async authors() {
    return this.authorService.findMany()
  }

  @ResolveField()
  async books(@Parent() parent: Author) {
    return this.bookService.findByAuthorId(parent.id)
  }
  
}
