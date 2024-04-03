import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Box, Container, Skeleton, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import Caption from '@/components/Caption'
import CountrySelector from '@/components/List/CountrySelector'
import CountrySwitch from '@/components/List/CountrySwitch'
import Navbar from '@/components/Navbar/Navbar'
import styles from '@/components/Map/Map.module.css'

const LeafletMap = dynamic(() => import("@/components/Map/Map"), {
  loading: () => <Skeleton className={styles.skeleton} />,
  ssr: false
});

const Home = () => {
  const [country, setCountry] = React.useState<string>();

  return (
    <>
      <Head>
        <title>FreeRoaming</title>
        <meta content='Site permettant de visualiser dans quel pays Free Mobile est en roaming' name='description' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta content='FreeRoaming' name='og:title' />
        <meta content='https://free-roaming.vercel.app/' name='og:url' />
        <meta content='Site permettant de visualiser dans quel pays Free Mobile est en roaming' name='og:description' />
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
          Merci à <Link color='blue.400' href='https://twitter.com/ErethaariO'>@ErethaariO</Link> pour sa contribution !
        </Text>
      </Container>
    </>
  );
};

export default Home;
