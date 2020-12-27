import { NextApiRequest, NextApiResponse } from 'next'

import CreateTweetService from '@backend/services/CreateTweetService'
import ListTweetsService from '@backend/services/ListTweetsService'
import getTokenData from '@backend/utils/getTokenData'

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

    const { token } = request.cookies

    if (!token) {
      response.status(400).json({ error: 'You must be logged to tweet.' })
      return
    }

    const { username } = getTokenData(token)

    const createTweetService = new CreateTweetService()

    const tweet = await createTweetService.execute({ text, username })

    response.json({ data: tweet })
  }
}

export default TweetsController
