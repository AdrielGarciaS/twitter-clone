import { Card, Space } from 'antd'
import { FC } from 'react'

import { useFeed } from '@frontend/hooks'

const Tweets: FC = () => {
  const { feed } = useFeed()

  if (!feed) return null

  return (
    <Space direction="vertical" size="middle">
      {feed.map((tweet, index) => (
        <Card key={index}>
          <h3>{tweet.text}</h3>

          <span>{tweet.author.username}</span>
        </Card>
      ))}
    </Space>
  )
}

export default Tweets
