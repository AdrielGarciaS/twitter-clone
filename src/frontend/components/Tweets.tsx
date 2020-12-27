import { Space } from 'antd'
import { FC, useMemo } from 'react'
import { format } from 'date-fns'

import { useFeed } from '@frontend/hooks'

import { Container, Tweet } from '@styles/components/Tweets'
import { GetServerSideProps } from 'next'
import { api } from '@frontend/services/api'

interface TweetsProps {
  feed: ITweet[]
}

const Tweets: FC = () => {
  const { feed } = useFeed()

  const tweets = useMemo(() => {
    return feed?.map(tweet => {
      const formattedCreatedAt = format(
        new Date(tweet.createdAt),
        'dd/MM/yyyy HH:mm',
      )

      return {
        ...tweet,
        formattedCreatedAt,
      }
    })
  }, [feed])

  console.log(feed)

  if (!feed) return null

  return (
    <Container>
      <Space direction="vertical" size="middle">
        {tweets.map((tweet, index) => (
          <Tweet
            key={index}
            author={tweet.author.username}
            content={tweet.text}
            datetime={tweet.formattedCreatedAt}
          />
        ))}
      </Space>
    </Container>
  )
}

// export const getServerSideProps: GetServerSideProps<TweetsProps> = async context => {
//   // const { feed } = useFeed()

//   const tweets = await api('tweets')

//   console.log(tweets)

//   return {
//     props: { feed: tweets },
//   }
// }

export default Tweets
