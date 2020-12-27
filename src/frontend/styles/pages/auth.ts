import styled from 'styled-components'
import { Button as ButtonAntd, Form as FormAntd } from 'antd'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Button = styled(ButtonAntd)`
  float: right;
`

export const Form = styled(FormAntd)`
  width: 420px;
`
