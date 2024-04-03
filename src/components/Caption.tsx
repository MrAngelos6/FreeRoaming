import { HStack, Text } from '@chakra-ui/react'
import { Check, HelpCircle, X } from 'lucide-react'
import styles from './Caption.module.css'

const Caption = () => (
    <HStack display='inline-flex'>
        <Text><Check className={styles.status} color='green' /> : Confirmé disponible par un abonné</Text>
        <Text><X className={styles.status} color='red' /> : Confirmé indisponible par un abonné</Text>
        <Text><HelpCircle className={styles.status} color='red' /> : Confirmé disponible par Free mais non vérifié</Text>
    </HStack>
);

export default Caption;
