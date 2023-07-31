import React from 'react'
import { Box, Tab } from '@chakra-ui/react';

interface CustomTabProps {
    icon: React.ReactElement;
    label: string;
}

const CustomTab = ({
    icon,
    label
}: CustomTabProps) => (
    <Tab>
        <Box mr='2'>{icon}</Box>
        {label}
    </Tab>
)

export default CustomTab;