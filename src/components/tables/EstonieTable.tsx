import React from 'react'
import { Td, Tr } from '@chakra-ui/react'
import GreenCheck from '../GreenCheck';
import RedHelp from '../RedHelp';

const EstonieTable = () => (
    <Tr>
        <Td>Tele2</Td>
        <Td><RedHelp /></Td>
        <Td><GreenCheck /></Td>
        <Td><GreenCheck /></Td>
        <Td><GreenCheck /></Td>
        <Td><GreenCheck /></Td>
    </Tr>
);

export default EstonieTable;
