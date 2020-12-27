import { PrismaClient } from '@prisma/client'

interface ICreateTweetServiceDTO {
  text: string
  username: string
}

class CreateTweetService {
  private prisma: PrismaClient

  public async execute({
    text,
    username,
  }: ICreateTweetServiceDTO): Promise<any> {
    this.prisma = new PrismaClient()

    const tweet = await this.prisma.tweet.create({
      data: { text, author: { connect: { username } } },
    })

    return tweet
  }
}

export default CreateTweetService
