import { Row, Col } from 'antd'
import { FC } from 'react'

import Tweets from '@frontend/components/Tweets'
import CreateTweetForm from '@frontend/components/CreateTweetForm'

const Home: FC = () => {
  return (
    <Row>
      <Col md={{ span: 10, offset: 8 }}>
        <CreateTweetForm />

        <Tweets />
      </Col>
    </Row>
  )
}

export default Home
