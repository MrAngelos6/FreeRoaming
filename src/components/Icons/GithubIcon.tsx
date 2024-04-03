import Image from 'next/image';
import type { ColorMode } from '@chakra-ui/react';
import Github from '@public/github-mark.svg';
import GithubWhite from '@public/github-mark-white.svg';

interface GithubIconProps {
    colorMode: ColorMode;
}

const GithubIcon = ({ colorMode }: GithubIconProps) => (
    <Image
        alt="Github's icon"
        height={24}
        src={colorMode === 'light' ? Github: GithubWhite }
        width={24}
    />
)

export default GithubIcon;