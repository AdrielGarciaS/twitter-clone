import { Space } from 'antd'
import { FC } from 'react'

import { useFeed } from '@frontend/hooks'

import { Container, Tweet } from '@styles/components/Tweets'

const Tweets: FC = () => {
  const { feed } = useFeed()

  if (!feed) return null

  return (
    <Container>
      <Space direction="vertical" size="middle">
        {feed.map((tweet, index) => (
          <Tweet key={index}>
            <p>{tweet.text}</p>
          </Tweet>
        ))}
      </Space>
    </Container>
  )
}

export default Tweets
