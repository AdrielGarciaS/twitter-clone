import { FC } from 'react'

import { Container, ChildrenContainer } from '@styles/_layout/DefaultLayout'

const DefaultLayout: FC = ({ children }) => {
  return (
    <Container>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  )
}

export default DefaultLayout
