import { Box, Button, Flex, TabList, useColorMode } from '@chakra-ui/react';
import { List, Map, Moon, Sun } from 'lucide-react';
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
                <Button ml='auto' onClick={toggleColorMode}>{ colorMode === 'light' ? <Moon /> : <Sun />}</Button>
            </Flex>
        </Box>
    )
};

export default Navbar;
