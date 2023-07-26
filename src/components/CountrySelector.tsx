import React from 'react'
import { Button, HStack, Select, useColorMode } from '@chakra-ui/react'
import { Flag, Moon, Sun } from 'lucide-react'
import PAYS from '@/constants/Pays';

interface CountrySelectorProps {
    onChange: (value: string) => void;
}

const CountrySelector = ({
    onChange,
}: CountrySelectorProps) => {
    const { colorMode, toggleColorMode } = useColorMode();

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    }

    return (
        <HStack>
            <Button onClick={toggleColorMode}>{ colorMode === 'light' ? <Moon /> : <Sun />}</Button>
            <Select placeholder='Choisissez un Pays' icon={<Flag />} onChange={handleCountryChange} variant='flushed'>
                { PAYS.map((pays) => <option key={pays.code} value={pays.code}>{pays.name}</option>) }
            </Select>
        </HStack>
    )
};

export default CountrySelector;
