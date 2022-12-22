import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from "mongoose"
import {nanoid} from "nanoid"
import {User, UserDocument, CreateUserInput} from "./user.schema"

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(input: CreateUserInput) {
    const confirmToken = nanoid(32) //confirm token in this example will be 32 bits long
    return this.userModel.create({...input, confirmToken})
  }
}
