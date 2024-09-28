import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next/types'
import "../styles/nprogress.css"

export type NextPageWithLayout = NextPage & {
  getLayout ? : (page:ReactElement) => ReactNode
}
export type AppPropsWithLayout = AppProps & {
  Component : NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)
  
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
     {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )

}
export default MyApp