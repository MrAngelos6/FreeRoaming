import React from 'react'
import { Text } from '@chakra-ui/react';
import { Check, HelpCircle, X } from 'lucide-react';
import styles from './CountrySwitch.module.css'

const Caption = () => (
    <>
        <Text><Check color='green' className={styles.status} />: Confirmé disponible par un abonné</Text>
        <Text><X color='red' className={styles.status} />: Confirmé indisponible par un abonné</Text>
        <Text><HelpCircle color='red' className={styles.status} />: Confirmé disponible par Free mais non vérifié</Text>
    </>
)

export default Caption;
