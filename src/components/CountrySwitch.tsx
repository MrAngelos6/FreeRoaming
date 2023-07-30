import React from 'react'
import { Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import Operator from '@/interfaces/operator'
import { Check, HelpCircle, X } from 'lucide-react'
import styles from './CountrySwitch.module.css'
import { Link } from '@chakra-ui/next-js'

interface CountrySwitchProps {
    value: string | undefined;
}

const CountrySwitch = ({
    value,
}: CountrySwitchProps) => {
    const [operatorList, setOperatorList] = React.useState<Operator[]>([]);

    React.useEffect(() => {
        if (value) {
            import(`../data/${value}.ts`)
                .then((d) => setOperatorList(d.default))
                .catch(() => console.error("Erreur le fichier demandé n'existe pas"));
        }
    }, [value]);

    const renderIcon = (data: boolean): React.ReactElement => {
        if (data === null) {
            return <HelpCircle color='red' />;
        } else if (data) {
            return <Check color='green' />;
        }
        return <X color='red' />;
    };

    const renderOperator = React.useMemo((): React.ReactNode => (
        operatorList.map((operator: Operator, key) => (
            <Tr key={key}>
                <Td>{operator.name}</Td>
                { operator.types.map((type, key) => <Td key={key}>{renderIcon(type)}</Td>) }
            </Tr>
        )) 
    ), [operatorList]);

    return value ? (
        <TableContainer>
            <Table variant='striped'>
                <TableCaption>
                    <Text><Check color='green' className={styles.status} />: Confirmé disponible par un abonné</Text>
                    <Text><X color='red' className={styles.status} />: Confirmé indisponible par un abonné</Text>
                    <Text><HelpCircle color='red' className={styles.status} />: Confirmé disponible par Free mais non vérifié</Text>
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Opérateur partenaire</Th>
                        <Th>2G</Th>
                        <Th>3G</Th>
                        <Th>4G</Th>
                        <Th>5G</Th>
                        <Th>5G confirmée par <Link href='https://twitter.com/Free_1337' color='blue.400'>@Free_1337</Link></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    { renderOperator }
                </Tbody>
            </Table>
        </TableContainer>
    ) : null;
}

export default CountrySwitch;
