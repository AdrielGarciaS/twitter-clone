import { FC } from 'react'

import Tweets from '@frontend/components/Tweets'
import CreateTweetForm from '@frontend/components/CreateTweetForm'

import { Container } from '@styles/pages/feed'

const Home: FC = () => {
  return (
    <Container>
      <CreateTweetForm />

      <Tweets />
    </Container>
  )
}

export default Home
