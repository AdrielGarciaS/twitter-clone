import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

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

    const session = await getSession({ req: request })

    console.log(session)

    if (!session?.user) {
      response.status(400).json({ error: 'You must be logged to tweet.' })
      return
    }

    // const { id: userId } = session

    const createTweetService = new CreateTweetService()

    const tweet = await createTweetService.execute({ text, email })

    response.json({ data: tweet })
  }
}

export default TweetsController
