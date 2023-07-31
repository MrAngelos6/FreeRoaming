import React from 'react'
import CountrySelector from '@/components/CountrySelector'
import { Container, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import Head from 'next/head'
import CountrySwitch from '@/components/CountrySwitch'
import { Link } from '@chakra-ui/next-js'
import { List, Map } from 'lucide-react'
import dynamic from 'next/dynamic'
import CustomTab from '@/components/CustomTab'

const LeafletMap = dynamic(() => import("@/components/Map"), { ssr: false });

const Home = () => {
  const [country, setCountry] = React.useState<string | undefined>();

  return (
    <>
      <Head>
        <title>FreeRoaming</title>
        <meta name="description" content="Site permettant de visualiser dans quel pays Free Mobile est en roaming" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Tabs variant='soft-rounded' colorScheme='yellow' isFitted isLazy>
        <TabList>
          <CustomTab icon={<List />} label='Liste' />
          <CustomTab icon={<Map />} label='Carte' />
        </TabList>

        <TabPanels>
          <TabPanel>
            <Container maxW='container.lg'>
              <CountrySelector onChange={setCountry} />
              <CountrySwitch value={country} />
            </Container>
          </TabPanel>
          <TabPanel>
            <Container maxW='full' h='container.sm'>
              <LeafletMap />
            </Container>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Text align='center'>
        Merci à <Link href='https://twitter.com/ErethaariO' color='blue.400'>@ErethaariO</Link> sur Twitter pour sa contribution !
      </Text>
    </>
  )
}

export default Home;
