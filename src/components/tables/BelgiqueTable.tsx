import React from 'react'
import { Td, Tr } from '@chakra-ui/react'
import GreenCheck from '../GreenCheck';
import RedHelp from '../RedHelp';

const BelgiqueTable = () => (
    <>
        <Tr>
            <Td>Base</Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
        </Tr>
        <Tr>
            <Td>Proximus</Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
        </Tr>
        <Tr>
            <Td>Orange Belgium</Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><GreenCheck /></Td>
            <Td><RedHelp /></Td>
            <Td><GreenCheck /></Td>
        </Tr>
    </>
);

export default BelgiqueTable;
