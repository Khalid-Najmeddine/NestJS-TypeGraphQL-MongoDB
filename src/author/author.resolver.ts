import { Query, ResolveField, Resolver, Parent, Mutation, Args } from '@nestjs/graphql';
import { BookService } from '../book/book.service';
import { Author, CreateAuthorInput} from './author.schema';
import { AuthorService } from './author.service';

@Resolver(() => Author)

export class AuthorResolver {
  constructor(private authorService: AuthorService, private bookService: BookService) {}

  @Query(() => [Author])
  async authors() {
    return this.authorService.findMany()
  }

  @Mutation(() => Author)
  async createAuthor(@Args("input") input: CreateAuthorInput) {
    return this.authorService.createAuthor(input)
  }

  @ResolveField()
  async books(@Parent() parent: Author) {
    return this.bookService.findByAuthorId(parent._id)
  }
  
}
