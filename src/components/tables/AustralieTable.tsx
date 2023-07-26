import React from 'react'
import { Td, Tr } from '@chakra-ui/react'
import GreenCheck from '../GreenCheck';
import RedX from '../RedX';

const AustralieTable = () => (
    <Tr>
        <Td>Optus</Td>
        <Td><RedX /></Td>
        <Td><GreenCheck /></Td>
        <Td><GreenCheck /></Td>
        <Td><RedX /></Td>
        <Td><RedX /></Td>
    </Tr>
);

export default AustralieTable;
