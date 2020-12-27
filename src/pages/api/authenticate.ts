import { NextApiRequest, NextApiResponse } from 'next'

import AuthenticationController from '@backend/controllers/AuthenticationController'

const authenticateRouter = async (
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> => {
  const authenticationController = new AuthenticationController()

  const { method } = request

  switch (method) {
    case 'POST':
      authenticationController.create(request, response)
      break
    default:
      response.status(404)
      break
  }
}

export default authenticateRouter
