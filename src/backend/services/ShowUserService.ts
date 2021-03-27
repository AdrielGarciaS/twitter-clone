import { PrismaClient, User } from '@prisma/client'

interface ICreateAuthenticationDTO {
  id: number
}

class CreateAuthenticationService {
  private prisma: PrismaClient

  public async execute({
    id,
  }: ICreateAuthenticationDTO): Promise<User | undefined> {
    this.prisma = new PrismaClient()

    const user = await this.prisma.user.findUnique({
      where: { id },
    })

    if (!user) return

    return user
  }
}

export default CreateAuthenticationService
