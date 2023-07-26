import React from 'react'
import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import AllemagneTable from './tables/AllemagneTable';
import AlgerieTable from './tables/AlgerieTable';
import AntillesGuyaneTable from './tables/AntillesGuyaneTable';
import ArabieSaouditeTable from './tables/ArabieSaouditeTable';
import ArgentineTable from './tables/ArgentineTable';
import AutricheTable from './tables/AutricheTable';
import AustralieTable from './tables/AustralieTable';
import BelgiqueTable from './tables/BelgiqueTable';
import BeninTable from './tables/BeninTable';
import BulgarieTable from './tables/BulgarieTable';

interface CountrySwitchProps {
    value: string | undefined;
}

const CountrySwitch = ({
    value,
}: CountrySwitchProps) => {
    const renderTable = React.useMemo(() => {
        switch (value) {
            case '1':
                return <AllemagneTable />;
            case '2':
                return <AlgerieTable />;
            case '3':
                return <AntillesGuyaneTable />;
            case '4':
                return <ArabieSaouditeTable />;
            case '5':
                return <ArgentineTable />;
            case '6':
                return <AutricheTable />;
            case '7':
                return <AustralieTable />;
            case '8':
                return <BelgiqueTable />;
            case '9':
                return <BeninTable />;
            case '10':
                return <BulgarieTable />;
        }
    }, [value]);

    return value ? (
        <TableContainer>
            <Table variant='striped'>
                <Thead>
                    <Tr>
                        <Th>Opérateur partenaire</Th>
                        <Th>2G</Th>
                        <Th>3G</Th>
                        <Th>4G</Th>
                        <Th>5G</Th>
                        <Th>5G confirmée par @Free_1337</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {renderTable}
                </Tbody>
            </Table>
        </TableContainer>
    ) : null;
}

export default CountrySwitch;
