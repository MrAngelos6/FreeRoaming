import { HStack, Select } from '@chakra-ui/react'
import { Flag } from 'lucide-react'
import PAYS from '@/constants/Pays'

interface CountrySelectorProps {
    onChange: (value: string) => void;
}

const CountrySelector = ({ onChange }: CountrySelectorProps) => {
    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => onChange(e.target.value);

    return (
        <HStack>
            <Select
                icon={<Flag />}
                onChange={handleCountryChange}
                placeholder='Choisissez un Pays'
                variant='flushed'
            >
                { PAYS.map((pays) => <option key={pays.code} value={pays.code}>{pays.name}</option>) }
            </Select>
        </HStack>
    );
};

export default CountrySelector;
