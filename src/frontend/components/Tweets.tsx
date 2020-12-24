import { Card } from 'antd'
import { FC } from 'react'

import { useFeed } from '@frontend/hooks'

const Tweets: FC = () => {
  const { feed } = useFeed()

  if (!feed) return null

  return (
    <>
      {feed.map((tweet, index) => (
        <Card key={index}>
          <h4>{tweet.text}</h4>

          <span>{tweet.author.username}</span>
        </Card>
      ))}
    </>
  )
}

export default Tweets
