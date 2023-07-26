import React from 'react'
import { Td, Tr } from '@chakra-ui/react'
import GreenCheck from '../GreenCheck';
import RedX from '../RedX';
import RedHelp from '../RedHelp';

const CoreeDuSudTable = () => (
    <Tr>
        <Td>SK Telecom</Td>
        <Td><RedX /></Td>
        <Td><GreenCheck /></Td>
        <Td><RedHelp /></Td>
        <Td><RedHelp /></Td>
        <Td><RedX /></Td>
    </Tr>
);

export default CoreeDuSudTable;
