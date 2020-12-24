import { FC, FormEvent, useState } from 'react'
import { Button, Input } from 'antd'
import { useFeed } from '@frontend/hooks'
import { api } from '@frontend/services/api'

const CreateTweetForm: FC = () => {
  const [tweet, setTweet] = useState('')

  const { addItemOnFeed } = useFeed()

  async function handleSubmit(e: FormEvent): Promise<void> {
    e.preventDefault()

    const newTweet: ITweet = {
      text: tweet,
      author: { username: 'Adriel' },
    }

    const _tweet = await api('tweet', { text: tweet })

    console.log(_tweet)

    addItemOnFeed(newTweet)
    setTweet('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem' }}>
      <Input value={tweet} onChange={e => setTweet(e.target.value)} />

      <Button htmlType="submit">Tweet</Button>
    </form>
  )
}

export default CreateTweetForm
