import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

import CreateUserService from '@backend/services/CreateUserService'
import ShowUserService from '@backend/services/ShowUserService'
import generateToken from '@backend/utils/generateToken'
import getTokenData from '@backend/utils/getTokenData'

class UsersController {
  public async create(
    request: NextApiRequest,
    response: NextApiResponse,
  ): Promise<void> {
    const { username, password } = request.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({ username, password })

    if (!user) {
      response
        .status(409)
        .json({ error: 'An user with that username already exists 😮' })

      return
    }

    const token = generateToken(user)

    response.setHeader(
      'Set-Cookie',
      cookie.serialize('token', token, {
        httpOnly: true,
        maxAge: 6 * 60 * 60,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      }),
    )

    response.json({ data: user })
  }

  public async show(
    request: NextApiRequest,
    response: NextApiResponse,
  ): Promise<void> {
    const { token } = request.cookies

    if (!token) {
      response.status(400).json({ error: 'JWT token does not exist' })
      return
    }

    const { id } = getTokenData(token)

    const showUserService = new ShowUserService()

    const user = await showUserService.execute({ id })

    if (!user) {
      response.status(409).json({ error: 'User not found' })

      return
    }

    response.json({ data: user })
  }
}

export default UsersController
