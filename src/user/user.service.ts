import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from "mongoose"
import {nanoid} from "nanoid"
import {User, UserDocument, CreateUserInput, ConfirmUserInput, LoginInput} from "./user.schema"
import Ctx from '../types/context.type';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(input: CreateUserInput) {
    const confirmToken = nanoid(32) //confirm token in this example will be 32 bits long
    return this.userModel.create({...input, confirmToken})
  }

  async confirmUser({email, confirmToken}:ConfirmUserInput) {
    const user = await this.userModel.findOne({email}) 
    if (!user || confirmToken !== user.confirmToken) { 
      throw new Error("Email or confirm token are incorrect")
    }
    user.active = true 
    await user.save()
    return user
  }

  async login({email, password}: LoginInput, context: Ctx) {
    const user = await this.userModel.findOne({email}).select("__v -confirmationToken")
    if (!user || !(await user.comparePassword(password))) {
      throw new Error("Invalid email or password")
    }
    const jwt = signJwt(omit(user.toJSON(), ["password", "active"]))

  }

}