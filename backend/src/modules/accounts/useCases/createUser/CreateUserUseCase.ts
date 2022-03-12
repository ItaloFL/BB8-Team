import { User } from "@prisma/client"
import { hash } from "bcryptjs"
import { client } from "../../../../database/client/client"

type RequestUser = {
  name: string,
  email: string,
  password: string
}

export class CreateUserUseCase {

  async execute({ name, email, password }: RequestUser): Promise<User>{

    const verifyIfUserExist = await client.user.findFirst({
      where: {
        email
      }
    })

    if(verifyIfUserExist) {
      throw new Error('Usuário existente!')
    }
    
    const PasswordHash = await hash(password, 8)

    const user = await client.user.create({
      data: {
        name,
        email,
        password: PasswordHash
      }
    })

    return user;
  }
}