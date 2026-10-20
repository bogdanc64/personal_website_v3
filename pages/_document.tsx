import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
    
    return (
    <Html className='dark'>
      <Head>
        <title>Bogdan Maftei</title>
        <meta name="description" content="Bogdan Maftei's Website Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}