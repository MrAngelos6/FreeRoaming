import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/theme'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { AppProps } from 'next/app'

const {
  Button,
  Container,
  Link,
  Select,
  Skeleton,
  Table,
  Tabs,
} = theme.components;

const customTheme = extendBaseTheme({
  components: {
    Button,
    Container,
    Link,
    Select,
    Skeleton,
    Table,
    Tabs,
  }
});

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraBaseProvider theme={customTheme}>
    <Component {...pageProps} />
    <Analytics />
    <SpeedInsights />
  </ChakraBaseProvider>
);


export default App;
