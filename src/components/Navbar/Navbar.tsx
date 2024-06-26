import { Link } from '@chakra-ui/next-js'
import { Box, Button, ButtonGroup, Flex, IconButton, TabList, useColorMode } from '@chakra-ui/react';
import { List, Map, Moon, Sun } from 'lucide-react';
import GithubIcon from '../Icons/GithubIcon';
import CustomTab from './CustomTab';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box mt={2}>
            <Flex>
                <TabList flex={1}>
                    <CustomTab icon={<List />} label='Liste' />
                    <CustomTab icon={<Map />} label='Carte' />
                </TabList>
                <ButtonGroup variant='outline' ml={2}>
                    <IconButton
                        aria-label={`Switch to ${colorMode} mode`}
                        icon={colorMode === 'light' ? <Moon /> : <Sun />}
                        onClick={toggleColorMode}
                    />
                    <Link href='https://github.com/MrAngelos6/FreeRoaming'>
                        <Button aria-label="Github page" rightIcon={<GithubIcon colorMode={colorMode} /> }>Github</Button>
                    </Link>
                </ButtonGroup>
            </Flex>
        </Box>
    );
};

export default Navbar;
