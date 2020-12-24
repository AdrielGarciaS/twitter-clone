import { PrismaClient } from '@prisma/client'

interface ICreateTweetServiceDTO {
  text: string
}

class CreateTweetService {
  private prisma: PrismaClient

  public async execute({ text }: ICreateTweetServiceDTO): Promise<any> {
    this.prisma = new PrismaClient()

    const tweet = await this.prisma.tweet.create({ data: { text } })

    return tweet
  }
}

export default CreateTweetService
