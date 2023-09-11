import { Link } from '@chakra-ui/next-js'
import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { Check, HelpCircle, X } from 'lucide-react'
import Caption from './Caption'
import Operator from '@/interfaces/operator'

interface CountryTableProps {
    data: Operator[];
    withCaption?: boolean;
}

const renderIcon = (status: boolean): React.ReactElement => {
    if (status === null) {
        return <HelpCircle color='red' />;
    } else if (status) {
        return <Check color='green' />;
    }
    return <X color='red' />;
};

const CountryTable = ({
    data,
    withCaption = false
}: CountryTableProps) => {
    const renderOperator = (): React.ReactNode => (
        data.map((operator: Operator, key: number) => (
            <Tr key={key}>
                <Td>{operator.name}</Td>
                { operator.types.map((type, key) => <Td key={key}>{renderIcon(type)}</Td>) }
            </Tr>
        )) 
    );

    return (
        <TableContainer>
            <Table variant='striped'>
                {withCaption && (
                    <TableCaption>
                        <Caption />
                    </TableCaption>
                )}
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
                    { renderOperator() }
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default CountryTable;
