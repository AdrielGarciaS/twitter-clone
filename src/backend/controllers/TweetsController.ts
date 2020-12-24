import CreateTweetService from '@backend/services/CreateTweetService'
import { NextApiRequest, NextApiResponse } from 'next'

class TweetsController {
  public async create(
    req: NextApiRequest,
    res: NextApiResponse,
  ): Promise<void> {
    const { text } = req.body

    const createTweetService = new CreateTweetService()

    const tweet = await createTweetService.execute({ text })

    res.json({ data: tweet })
  }
}

export default TweetsController
