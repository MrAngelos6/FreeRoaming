import React from 'react'
import { Td, Tr } from '@chakra-ui/react'
import GreenCheck from '../GreenCheck';
import RedX from '../RedX';
import RedHelp from '../RedHelp';

const ArgentineTable = () => (
    <Tr>
        <Td>Personal</Td>
        <Td><RedHelp /></Td>
        <Td><GreenCheck /></Td>
        <Td><GreenCheck /></Td>
        <Td><RedHelp /></Td>
        <Td><RedX /></Td>
    </Tr>
);

export default ArgentineTable;
