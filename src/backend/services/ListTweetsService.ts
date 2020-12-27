import { PrismaClient, Tweet } from '@prisma/client'
class ListTweetsService {
  private prisma: PrismaClient

  public async execute(): Promise<Tweet[]> {
    this.prisma = new PrismaClient()

    const tweets = await this.prisma.tweet.findMany({
      orderBy: { createdAt: 'desc' },
      include: { author: true },
    })

    return tweets
  }
}

export default ListTweetsService
