import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ChildrenContainer = styled.div`
  max-width: 1120px;
  width: calc(100% - 320px);
  margin: 16px 0;

  @media (max-width: 600px) {
    max-width: 560px;
    width: calc(100% - 20px);
  }
`
