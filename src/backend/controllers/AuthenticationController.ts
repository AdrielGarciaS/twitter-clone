import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'

import CreateAuthenticationService from '@backend/services/CreateAuthenticationService'

class AuthenticationController {
  public async create(
    request: NextApiRequest,
    response: NextApiResponse,
  ): Promise<void> {
    const { username, password } = request.body

    const createAuthenticationService = new CreateAuthenticationService()

    const authentication = await createAuthenticationService.execute({
      username,
      password,
    })

    if (!authentication) {
      response.status(400).json({ error: 'Incorrect username or password 🙁' })

      return
    }

    response.setHeader(
      'Set-Cookie',
      cookie.serialize('token', authentication.token, {
        httpOnly: true,
        maxAge: 6 * 60 * 60,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      }),
    )

    response.json({ data: authentication.user })
  }
}

export default AuthenticationController
