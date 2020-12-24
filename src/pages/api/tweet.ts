import TweetsController from '@backend/controllers/TweetsController'
import { NextApiRequest, NextApiResponse } from 'next'

const tweetRouter = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const tweetsController = new TweetsController()

  switch (req.method) {
    case 'POST':
      tweetsController.create(req, res)
      break
  }
}

export default tweetRouter
