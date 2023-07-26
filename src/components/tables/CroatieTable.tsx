import React from 'react'
import { Td, Tr } from '@chakra-ui/react'
import GreenCheck from '../GreenCheck';
import RedX from '../RedX';
import RedHelp from '../RedHelp';

const CroatieTable = () => (
    <>
        <Tr>
            <Td>A1</Td>
            <Td><GreenCheck /></Td>
            <Td><RedX /></Td>
            <Td><GreenCheck /></Td>
            <Td><RedHelp /></Td>
            <Td><GreenCheck /></Td>
        </Tr>
        <Tr>
            <Td>Tele2</Td>
            <Td><GreenCheck /></Td>
            <Td><RedX /></Td>
            <Td><GreenCheck /></Td>
            <Td><RedHelp /></Td>
            <Td><GreenCheck /></Td>
        </Tr>
    </>
);

export default CroatieTable;
