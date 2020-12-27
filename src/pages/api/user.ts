import { NextApiRequest, NextApiResponse } from 'next'

import UsersController from '@backend/controllers/UsersController'

const userRouter = async (
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> => {
  const usersController = new UsersController()

  const { method } = request

  switch (method) {
    case 'POST':
      usersController.create(request, response)
      break
    default:
      response.status(404)
      break
  }
}

export default userRouter
