import React from 'react'
import { Td, Tr } from '@chakra-ui/react'
import GreenCheck from '../GreenCheck';
import RedX from '../RedX';

const ArabieSaouditeTable = () => (
    <>
        <Tr>
            <Td>Mobily</Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><RedX /></Td>
            <Td><RedX /></Td>
            <Td><RedX /></Td>
        </Tr>
        <Tr>
            <Td>Zain</Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><RedX /></Td>
            <Td><RedX /></Td>
        </Tr>
        <Tr>
            <Td>STC</Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><RedX /></Td>
        </Tr>
    </>
);

export default ArabieSaouditeTable;
