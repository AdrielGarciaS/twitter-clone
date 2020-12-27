import generateToken from '@backend/utils/generateToken'
import { PrismaClient, User } from '@prisma/client'
import { compare } from 'bcrypt'

interface ICreateAuthenticationDTO {
  username: string
  password: string
}

interface ICreateAuthenticationResponse {
  user: User
  token: string
}

class CreateAuthenticationService {
  private prisma: PrismaClient

  public async execute({
    username,
    password,
  }: ICreateAuthenticationDTO): Promise<
    ICreateAuthenticationResponse | undefined
  > {
    this.prisma = new PrismaClient()

    const user = await this.prisma.user.findUnique({
      where: { username },
    })

    if (!user) return

    const passwordMatch = await compare(password, user.password)

    console.log(passwordMatch)

    if (!passwordMatch) return

    const token = generateToken(user)

    delete user.password

    return { user, token }
  }
}

export default CreateAuthenticationService
