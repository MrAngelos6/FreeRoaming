import React from 'react'
import { Td, Tr } from '@chakra-ui/react'
import GreenCheck from '../GreenCheck';
import RedHelp from '../RedHelp';
import RedX from '../RedX';

const BulgarieTable = () => (
    <>
        <Tr>
            <Td>A1</Td>
            <Td><RedX /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><RedHelp /></Td>
            <Td><GreenCheck /></Td>
        </Tr>
        <Tr>
            <Td>Telenor</Td>
            <Td><RedX /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><RedHelp /></Td>
            <Td><GreenCheck /></Td>
        </Tr>
    </>
);

export default BulgarieTable;
