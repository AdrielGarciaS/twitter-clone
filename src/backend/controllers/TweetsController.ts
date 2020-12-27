import { NextApiRequest, NextApiResponse } from 'next'

import CreateTweetService from '@backend/services/CreateTweetService'
import ListTweetsService from '@backend/services/ListTweetsService'

class TweetsController {
  public async index(
    _: NextApiRequest,
    response: NextApiResponse,
  ): Promise<void> {
    const listTweetsService = new ListTweetsService()

    const tweets = await listTweetsService.execute()

    response.json({ data: tweets })
  }

  public async create(
    request: NextApiRequest,
    response: NextApiResponse,
  ): Promise<void> {
    const { text } = request.body

    const createTweetService = new CreateTweetService()

    const tweet = await createTweetService.execute({ text })

    response.json({ data: tweet })
  }
}

export default TweetsController
