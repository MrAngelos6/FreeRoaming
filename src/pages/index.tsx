import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Container, Skeleton, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import CountrySelector from '@/components/CountrySelector'
import CountrySwitch from '@/components/CountrySwitch'
import Navbar from '@/components/Navbar'

const LeafletMap = dynamic(() => import("@/components/Map"), {
  loading: () => <Skeleton style={{ height: '100%' }} />,
  ssr: false
});

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
        <Tabs variant='soft-rounded' colorScheme='yellow' isFitted isLazy>
          <Navbar />

          <TabPanels>
            <TabPanel>
              <CountrySelector onChange={setCountry} />
              <CountrySwitch value={country} />
            </TabPanel>
            <TabPanel maxW='full' h='container.sm'>
              <LeafletMap />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Text align='center'>
          Merci à <Link href='https://twitter.com/ErethaariO' color='blue.400'>@ErethaariO</Link> pour sa contribution !
        </Text>
      </Container>
    </>
  )
}

export default Home;
