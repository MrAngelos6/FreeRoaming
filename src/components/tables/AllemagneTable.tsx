import React from 'react'
import { Td, Tr } from '@chakra-ui/react'
import GreenCheck from '../GreenCheck';
import RedX from '../RedX';

const AllemagneTable = () => (
    <>
        <Tr>
            <Td>Vodafone</Td>
            <Td><GreenCheck /></Td>
            <Td><RedX /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
        </Tr>
        <Tr>
            <Td>O2</Td>
            <Td><GreenCheck /></Td>
            <Td><RedX /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
        </Tr>
    </>
);

export default AllemagneTable;
