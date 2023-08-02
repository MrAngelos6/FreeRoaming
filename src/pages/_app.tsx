import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'

const {
  Button,
  Container,
  Link,
  Select,
  Skeleton,
  Table,
  Tabs,
} = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
    Container,
    Link,
    Select,
    Skeleton,
    Table,
    Tabs,
  }
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ChakraBaseProvider>
  );
}

export default App;
