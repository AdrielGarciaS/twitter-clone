import { PrismaClient, Tweet } from '@prisma/client'

interface ICreateTweetServiceDTO {
  text: string
  userId: number
}

class CreateTweetService {
  private prisma: PrismaClient

  public async execute({
    text,
    userId,
  }: ICreateTweetServiceDTO): Promise<Tweet> {
    this.prisma = new PrismaClient()

    const tweet = await this.prisma.tweet.create({
      data: { text, author: { connect: { id: userId } } },
    })

    return tweet
  }
}

export default CreateTweetService
