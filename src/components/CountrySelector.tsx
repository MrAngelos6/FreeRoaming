import React from 'react'
import { Select } from '@chakra-ui/react'
import { Flag } from 'lucide-react'

interface CountrySelectorProps {
    onChange: (value: string) => void;
}

const CountrySelector = ({
    onChange,
}: CountrySelectorProps) => {
    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    }

    return (
        <Select placeholder='Choisissez un Pays' icon={<Flag />} iconColor='yellow' onChange={handleCountryChange} variant='flushed'>
            <option value='1'>Allemagne 🇩🇪</option>
            <option value='2'>Algérie 🇩🇿</option>
            <option value='3'>Antilles-Guyane 🇬🇫</option>
            <option value='4'>Arabie Saoudite 🇸🇦</option>
            <option value='5'>Argentine 🇦🇷</option>
            <option value='6'>Autriche 🇦🇹</option>
            <option value='7'>Australie 🇦🇺</option>
            <option value='8'>Belgique 🇧🇪</option>
            <option value='9'>Bénin 🇧🇯</option>
            <option value='10'>Bulgarie 🇧🇬</option>
            <option value='11'>Cameroun 🇨🇲</option>
            <option value='12'>Canada 🇨🇦</option>
            <option value='13'>Chine 🇨🇳</option>
            <option value='14'>Chypre 🇨🇾</option>
            <option value='15'>Corée du Sud 🇰🇷</option>
            <option value='16'>Croatie 🇭🇷</option>
            <option value='17'>Danemark 🇩🇰</option>
            <option value='18'>Egypte 🇪🇬</option>
            <option value='19'>États-Unis 🇺🇸</option>
            <option value='20'>Emirats Arabes Unis 🇦🇪</option>
            <option value='21'>Estonie 🇪🇪</option>
            <option value='22'>Espagne 🇪🇸</option>
            <option value='23'>Grèce 🇬🇷</option>
            <option value='24'>Kenya 🇰🇪</option>
            <option value='25'>Hongrie 🇭🇺</option>
            <option value='26'>Italie 🇮🇹</option>
            <option value='27'>Irlande 🇮🇪</option>
            <option value='28'>Islande 🇮🇸</option>
            <option value='29'>Israel 🇮🇱</option>
            <option value='30'>Japon 🇯🇵</option>
            <option value='31'>Laos 🇱🇦</option>
            <option value='32'>La Réunion 🇷🇪</option>
            <option value='33'>Liban 🇱🇧</option>
            <option value='34'>Malte 🇲🇹</option>
            <option value='35'>Maroc 🇲🇦</option>
            <option value='36'>Mayotte 🇾🇹</option>
            <option value='37'>Mexique 🇲🇽</option>
            <option value='38'>Myanmar 🇲🇲</option>
            <option value='39'>Nouvelle-Zélande 🇳🇿</option>
            <option value='40'>Norvège 🇳🇴</option>
            <option value='41'>Pays-Bas 🇳🇱</option>
            <option value='42'>Portugal 🇵🇹</option>
            <option value='43'>Pologne 🇵🇱</option>
            <option value='44'>Qatar 🇶🇦</option>
            <option value='45'>République Dominicaine 🇩🇴</option>
            <option value='46'>République Tchèque 🇨🇿</option>
            <option value='47'>Roumanie 🇷🇴</option>
            <option value='48'>Royaume-Uni 🇬🇧</option>
            <option value='49'>Russie 🇷🇺</option>
            <option value='50'>Sénégal 🇸🇳</option>
            <option value='51'>Serbie 🇷🇸</option>
            <option value='52'>Slovaquie 🇸🇰</option>
            <option value='53'>Slovénie 🇸🇮</option>
            <option value='54'>Suède 🇸🇪</option>
            <option value='55'>Suisse 🇨🇭</option>
            <option value='56'>Thailande 🇹🇭</option>
            <option value='57'>Turquie 🇹🇷</option>
            <option value='58'>Tunisie 🇹🇳</option>
            <option value='59'>Ukraine 🇺🇦</option>
        </Select>
    )
};

export default CountrySelector;
