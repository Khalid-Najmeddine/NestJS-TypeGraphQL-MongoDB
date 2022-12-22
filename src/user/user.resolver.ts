import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User, CreateUserInput } from './user.schema';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {

  constructor(private readonly userService: UserService) {}

  @Mutation (() => User)
  async registerUser(@Args("input") input: CreateUserInput) {
    return this.userService.createUser(input)
  }
}
