import { Tweet } from '@prisma/client'

declare global {
  interface ITweet extends Tweet {
    author: {
      name: string
      email: string
      image: string
    }
  }
}
