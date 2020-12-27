import useSWR from 'swr'
import { User } from '@prisma/client'
import { api } from '@frontend/services/api'

interface IGetFeedRequest {
  data: ITweet[]
}

interface IUseFeedResponse {
  feed: ITweet[]
  addItemOnFeed(tweet: ITweet): void
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
  me: User
}

export const useMe = (): IUseMeResponse => {
  const { data } = useSWR<User>('me', api)

  return {
    me: data,
  }
}
