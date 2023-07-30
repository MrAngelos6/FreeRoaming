import React from 'react'
import CountrySelector from '@/components/CountrySelector'
import { Container, Text } from '@chakra-ui/react'
import Head from 'next/head'
import CountrySwitch from '@/components/CountrySwitch'
import { Link } from '@chakra-ui/next-js'

const Home = () => {
  const [country, setCountry] = React.useState<string | undefined>();

  return (
    <>
      <Head>
        <title>FreeRoaming</title>
        <meta name="description" content="Site permettant de visualiser dans quel pays Free Mobile est en roaming" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container maxW='container.lg' h='95vh'>
        <CountrySelector onChange={setCountry} />
        <CountrySwitch value={country} />
      </Container>
      <Text align='center'>
        Merci à <Link href='https://twitter.com/ErethaariO' color='blue.400'>@ErethaariO</Link> sur Twitter pour sa contribution !
      </Text>
    </>
  )
}

export default Home;
