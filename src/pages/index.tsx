import React from 'react'
import CountrySelector from '@/components/CountrySelector'
import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import CountrySwitch from '@/components/CountrySwitch'

const Home = () => {
  const [country, setCountry] = React.useState<string | undefined>();

  return (
    <>
      <Head>
        <title>FreeRoaming</title>
        <meta name="description" content="Site permettant de visualiser dans quel pays Free Mobile est en roaming" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container maxW='container.lg'>
        <CountrySelector onChange={setCountry} />
        <CountrySwitch value={country} />
      </Container>
    </>
  )
}

export default Home;
