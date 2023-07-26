import React from 'react'
import { Td, Tr } from '@chakra-ui/react'
import GreenCheck from '../GreenCheck';
import RedX from '../RedX';

const EgypteTable = () => (
    <Tr>
        <Td>Vodafone</Td>
        <Td><GreenCheck /></Td>
        <Td><GreenCheck /></Td>
        <Td><GreenCheck /></Td>
        <Td><RedX /></Td>
        <Td><RedX /></Td>
    </Tr>
);

export default EgypteTable;
