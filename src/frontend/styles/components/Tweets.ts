import styled from 'styled-components'
import { Card } from 'antd'

export const Container = styled.div`
  border-radius: 4px;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Tweet = styled(Card)`
  width: 60vw;
  max-width: 900px;
  padding: 15px;

  border: 1px solid #f0f0f0;
  border-radius: 4px;

  p {
    font-weight: bold;
  }
`
