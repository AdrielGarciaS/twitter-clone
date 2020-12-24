import { FC } from 'react'

import 'antd/dist/antd.css'

interface IMyAppProps {
  Component: FC
  pageProps: Record<string, unknown>
}

const MyApp: FC<IMyAppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
