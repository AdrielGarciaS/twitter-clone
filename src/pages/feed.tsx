import { Row, Col, Grid } from 'antd'
import { FC } from 'react'

import Tweets from '@frontend/components/Tweets'
import CreateTweetForm from '@frontend/components/CreateTweetForm'

const Home: FC = () => {
  return (
    <Row align="middle" justify="center" style={{ padding: 20 }}>
      <Col>
        <CreateTweetForm />

        <Tweets />
      </Col>
    </Row>
  )
}

export default Home
