import useSWR from 'swr'
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
  const { data, mutate, isValidating } = useSWR<IGetFeedRequest>('feed', api)

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
