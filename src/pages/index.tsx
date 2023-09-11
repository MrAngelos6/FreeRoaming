import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Box, Container, Skeleton, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import Caption from '@/components/Caption'
import CountrySelector from '@/components/CountrySelector'
import CountrySwitch from '@/components/CountrySwitch'
import Navbar from '@/components/Navbar'
import styles from '@/components/Map.module.css'

const LeafletMap = dynamic(() => import("@/components/Map"), {
  loading: () => <Skeleton className={styles.skeleton} />,
  ssr: false
});

const Home = () => {
  const [country, setCountry] = React.useState<string | undefined>();

  return (
    <>
      <Head>
        <title>FreeRoaming</title>
        <meta name='description' content='Site permettant de visualiser dans quel pays Free Mobile est en roaming' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='og:title' content='FreeRoaming' />
        <meta name='og:url' content='https://free-roaming.vercel.app/' />
        <meta name='og:description' content='Site permettant de visualiser dans quel pays Free Mobile est en roaming' />
      </Head>

      <Container maxW='container.lg'>
        <Tabs
          colorScheme='yellow'
          isFitted
          isLazy
          variant='soft-rounded'
        >
          <Navbar />

          <TabPanels>
            <TabPanel>
              <CountrySelector onChange={setCountry} />
              <CountrySwitch value={country} />
            </TabPanel>
            <TabPanel>
              <Box h='container.sm' mb={2}>
                <LeafletMap />
              </Box>
              <Caption />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Text align='center'>
          Merci à <Link href='https://twitter.com/ErethaariO' color='blue.400'>@ErethaariO</Link> pour sa contribution !
        </Text>
      </Container>
    </>
  );
};

export default Home;
