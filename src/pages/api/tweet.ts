import { NextApiRequest, NextApiResponse } from 'next'

import TweetsController from '@backend/controllers/TweetsController'

const tweetRouter = async (
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> => {
  const tweetsController = new TweetsController()

  const { method } = request

  switch (method) {
    case 'POST':
      tweetsController.create(request, response)
      break
    case 'GET':
      tweetsController.index(request, response)
      break
    default:
      response.status(404)
      break
  }
}

export default tweetRouter
