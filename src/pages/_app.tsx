import { FC } from 'react'
import { Provider } from 'next-auth/client'

import 'antd/dist/antd.css'

import GlobalStyle from '@styles/GlobalStyle'
import DefaultLayout from '@frontend/components/_layout/DefaultLayout'

interface IMyAppProps {
  Component: FC
  pageProps: Record<string, any>
}

const MyApp: FC<IMyAppProps> = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      <GlobalStyle />
    </Provider>
  )
}

export default MyApp
