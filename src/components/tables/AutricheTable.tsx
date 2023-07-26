import React from 'react'
import { Td, Tr } from '@chakra-ui/react'
import GreenCheck from '../GreenCheck';
import RedHelp from '../RedHelp';

const AutricheTable = () => (
    <>
        <Tr>
            <Td>A1</Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><RedHelp /></Td>
            <Td><GreenCheck /></Td>
        </Tr>
        <Tr>
            <Td>3 AT</Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><RedHelp /></Td>
            <Td><GreenCheck /></Td>
        </Tr>
    </>
);

export default AutricheTable;
