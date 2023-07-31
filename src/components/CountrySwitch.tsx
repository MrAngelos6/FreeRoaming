import React from 'react'
import Operator from '@/interfaces/operator'
import CountryTable from './CountryTable';

interface CountrySwitchProps {
    value: string | undefined;
}

const CountrySwitch = ({
    value,
}: CountrySwitchProps) => {
    const [operatorList, setOperatorList] = React.useState<Operator[]>([]);

    React.useEffect(() => {
        if (value) {
            import(`../data/${value}`)
                .then((d) => setOperatorList(d.default))
                .catch(() => console.error("Erreur le fichier demandé n'existe pas"));
        }
    }, [value]);

    return value ? (<CountryTable data={operatorList} withCaption />) : null;
}

export default CountrySwitch;
