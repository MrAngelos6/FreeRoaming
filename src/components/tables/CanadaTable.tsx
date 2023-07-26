import React from 'react'
import { Td, Tr } from '@chakra-ui/react'
import GreenCheck from '../GreenCheck';
import RedX from '../RedX';

const CanadaTable = () => (
    <>
        <Tr>
            <Td>Bell</Td>
            <Td><RedX /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
        </Tr>
        <Tr>
            <Td>Rogers</Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><RedX /></Td>
            <Td><GreenCheck /></Td>
        </Tr>
        <Tr>
            <Td>Telus</Td>
            <Td><RedX /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
        </Tr>
        <Tr>
            <Td>Vidéotron</Td>
            <Td><RedX /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><RedX /></Td>
            <Td><GreenCheck /></Td>
        </Tr>
    </>
);

export default CanadaTable;
