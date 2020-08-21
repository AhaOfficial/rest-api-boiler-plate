export interface UserModel {
  id: number
  email: string
  name: string
  status?: 'Happy' | 'Sad'
  phoneNumber: string
}
