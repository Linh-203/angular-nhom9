export interface IUser {
   message: string
   data: {
      name: string
      email: string
      token: string
      defaultAvatar: string
      role: string
   }
}

export interface ILogin {
   email: string
   password: string
}
export interface ISignup {
   email: string
   password: string
   name: string
}
