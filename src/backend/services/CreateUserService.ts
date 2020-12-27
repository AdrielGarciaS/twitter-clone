import { PrismaClient, User } from '@prisma/client'
import bcrypt from 'bcrypt'

interface ICreateUserDTO {
  username: string
  password: string
}

class CreateUserService {
  private prisma: PrismaClient

  public async execute({
    username,
    password,
  }: ICreateUserDTO): Promise<User | undefined> {
    this.prisma = new PrismaClient()

    const hashedPassword = await bcrypt.hash(password, 8)

    try {
      const user = await this.prisma.user.create({
        data: {
          username,
          password: hashedPassword,
        },
      })

      delete user.password

      return user
    } catch {}
  }
}

export default CreateUserService
