import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse
} from 'tsoa'
import { UserModel } from './user.model'
import { UserCreateParams, UserRepository } from './user.repository'

@Route('users')
export class UsersController extends Controller {
  @Get('{userId}')
  public async getUser(
    @Path() userId: number,
    @Query() name?: string
  ): Promise<UserModel> {
    return new UserRepository().get(userId, name)
  }

  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreateParams
  ): Promise<void> {
    this.setStatus(201) // set return status 201
    new UserRepository().create(requestBody)
    return
  }
}
