import { Row, Col } from 'antd'
import { FC } from 'react'

import Tweets from '@frontend/components/Tweets'
import CreateTweetForm from '@frontend/components/CreateTweetForm'

import { Container } from '@styles/pages/feed'

const Home: FC = () => {
  return (
    <Container>
      {/* <Row align="middle" justify="center" style={{ padding: 20 }}> */}
      {/* <Col lg={24}> */}
      <CreateTweetForm />

      <Tweets />
      {/* </Col> */}
      {/* </Row> */}
    </Container>
  )
}

export default Home
