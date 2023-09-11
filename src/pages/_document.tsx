import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

const Document = () => (
  <Html lang='fr'>
    <Head />
    <body>
      <ColorModeScript initialColorMode='system' />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
