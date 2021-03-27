import { NextApiHandler } from 'next'
import NextAuth, { InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const options: InitOptions = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'user:email',
    }),

    Providers.Credentials({
      id: 'login',
      name: 'Login',
      authorize: async credentials => {
        const user = {
          id: '1',
          username: 'adrielgarcia',
          name: 'Adriel Garcia',
          email: 'adrielgarcia@live.com',
        }

        return Promise.resolve(user)
      },
      credentials: {
        username: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'text' },
      },
    }),
  ],
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  secret: process.env.AUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  adapter: Adapters.Prisma.Adapter({ prisma }),

  debug: process.env.NODE_ENV === 'development',
}

const authRouter: NextApiHandler = (request, response) => {
  return NextAuth(request, response, options)
}

export default authRouter
