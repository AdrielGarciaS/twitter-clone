import { User, Tweet } from '@prisma/client'

declare global {
  interface ITweet extends Tweet {
    author: User
  }
}
