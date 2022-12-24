import { Args, Mutation, Resolver, Query, Context } from '@nestjs/graphql';
import { User, CreateUserInput, ConfirmUserInput, LoginInput } from './user.schema';
import { UserService } from './user.service';
import Ctx from '../types/context.type';

@Resolver('User')
export class UserResolver { 
  constructor(private readonly userService: UserService) {}

  @Mutation (() => User)
  async registerUser(@Args("input") input: CreateUserInput) {
    return this.userService.createUser(input)
  }

  @Mutation (() => User)
  async confirmUser(@Args("input") input: ConfirmUserInput, ) {
    return this.userService.confirmUser(input)
  }

  @Query(() => User)
  async login(@Args("input") input: LoginInput, @Context() context: Ctx) {
    return this.userService.login(input, context)
  }

  @Query(() => User, {nullable: true})
  async me(@Context() context: Ctx) {
    return context.req.user
  }

  @Query(() => User, {nullable: true})
  async logout(@Context() context: Ctx) {
    return this.userService.logout(context) 
  }

}
