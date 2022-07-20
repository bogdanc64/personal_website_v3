import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    
    return (
    <Html className='dark'>
      <Head>
        <title>Bogdan Maftei</title>
        <meta name="description" content="Bogdan Maftei's Website Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"></link>
      </Head>
      <body className='bg-primary transition duration-200 px-96 pt-12'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}