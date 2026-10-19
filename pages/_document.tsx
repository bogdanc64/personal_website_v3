import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
    
    return (
    <Html className='dark'>
      <Head>
        <title>Bogdan Maftei</title>
        <meta name="description" content="Bogdan Maftei's Website Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}