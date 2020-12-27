import { PrismaClient } from '@prisma/client'

class ListTweetsService {
  private prisma: PrismaClient

  public async execute(): Promise<any[]> {
    this.prisma = new PrismaClient()

    const tweets = await this.prisma.tweet.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return tweets
  }
}

export default ListTweetsService
