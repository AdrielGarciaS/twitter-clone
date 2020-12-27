import { FC } from 'react'

import 'antd/dist/antd.css'

import GlobalStyle from '@styles/GlobalStyle'
import DefaultLayout from '@frontend/components/_layout/DefaultLayout'

interface IMyAppProps {
  Component: FC
  pageProps: Record<string, unknown>
}

const MyApp: FC<IMyAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      <GlobalStyle />
    </>
  )
}

export default MyApp
