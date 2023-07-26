import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='fr'>
      <Head />
      <body>
        <ColorModeScript initialColorMode='system' />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
