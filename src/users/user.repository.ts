import { UserModel } from './user.model'

// A post request should not contain an id.
export type UserCreateParams = Pick<UserModel, 'email' | 'name' | 'phoneNumber'>

export class UserRepository {
  public get(id: number, name?: string): UserModel {
    return {
      id,
      email: 'jane@doe.com',
      name: name ?? 'Jane Doe',
      status: 'Happy',
      phoneNumber: '01063651638'
    }
  }

  public create(userCreateParams: UserCreateParams): UserModel {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: 'Happy',
      ...userCreateParams
    }
  }
}
