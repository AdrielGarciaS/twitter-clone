import useSWR from 'swr'
import { User, Tweet } from '@prisma/client'
import { api } from '@frontend/services/api'

interface IGetFeedRequest {
  data: ITweet[]
}

interface IUseFeedResponse {
  feed: ITweet[]
  addItemOnFeed(tweet: Tweet): void
  isFeedLoading: boolean
}

export const useFeed = (): IUseFeedResponse => {
  const { data, mutate, isValidating } = useSWR<IGetFeedRequest>('tweet', api)

  function addItemOnFeed(tweet: ITweet): void {
    const _feed = [tweet, ...data?.data]

    mutate({ data: _feed }, false)
  }

  return {
    feed: data?.data,
    addItemOnFeed,
    isFeedLoading: isValidating,
  }
}

interface IUseMeResponse {
  data: User
}

interface IUseMe {
  me: User
  refreshMe(user?: User): Promise<void>
}

export const useMe = (): IUseMe => {
  const { data, mutate } = useSWR<IUseMeResponse>('me', api, {
    shouldRetryOnError: false,
  })

  async function refreshMe(user?: User): Promise<void> {
    mutate({ data: user })
  }

  return {
    me: data?.data,
    refreshMe,
  }
}
