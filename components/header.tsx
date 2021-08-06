import { Text, Box, Grid, HStack, Link } from '@chakra-ui/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import Container from './container';

import GmailIcon from './icons/gmail-icon';
import GithubIcon from './icons/github-icon';
import DevToIcon from './icons/devto-icon';
import MediumIcon from './icons/medium-icon';
import DribbleIcon from './icons/dribble-icon';

import profileImageSrc from 'public/static/profile.jpg';

const SocialLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 54px;
    border: 1px solid white;
    border-radius: 100%;

    svg {
        transform: scale(0.72);
    }

    @media (min-width: 48em) {
        width: 64px;
        height: 64px;

        svg {
            transform: scale(1);
        }
    }

    &:hover,
    &:active {
        background-color: white;
        svg {
            fill: black;
        }
    }

    &:focus {
        box-shadow: 0 0 0 3px #2dffc0;
    }
`;

const FancyUnderline = styled(Link)`
    position: relative;

    &::after {
        content: '';
        height: 8px;
        width: 106%;
        opacity: 0.6;
        background-color: #2dffc0;
        position: absolute;
        bottom: 0;
        left: -2px;
        transition: height 0.2s ease;
    }

    &:hover {
        text-decoration: none;

        &::after {
            height: 2px;
        }
    }

    &:focus {
        box-shadow: 0 0 0 3px #2dffc0;
    }
`;

function LeftColumn() {
    return (
        <Box as="main" color="white">
            <Text fontSize="4xl" lineHeight="1">
                JS
            </Text>
            <Text
                fontSize={{ base: '2xl', lg: '4xl' }}
                fontWeight="light"
                mt={{ base: 24, lg: 28 }}
            >
                Hi, there ✋
            </Text>
            <Text fontSize={{ base: '4xl', lg: '5xl' }} mt={4}>
                I’m Jai Sharma.
            </Text>
            <Text
                mt={6}
                fontSize={{ base: 'medium', md: 'large' }}
                maxW={{ base: '98%', lg: '85%' }}
            >
                I’m a Software Developer based in New Delhi, India. I specialize
                in creating high quality{' '}
                <FancyUnderline href="#website">websites</FancyUnderline> &{' '}
                <FancyUnderline href="#webapp">webapps</FancyUnderline> made
                with ❤ of modern web technologies.
            </Text>
            <HStack spacing={{ base: 3, lg: 9 }} mt={10}>
                <SocialLink
                    isExternal
                    aria-label="Gmail"
                    href="mailto:sendtojsharma@gmail.com"
                >
                    <GmailIcon />
                </SocialLink>
                <SocialLink
                    isExternal
                    aria-label="Github"
                    href="https://github.com/jaisharx"
                >
                    <GithubIcon />
                </SocialLink>
                <SocialLink
                    isExternal
                    aria-label="Dev.to"
                    href="https://dev.to/jaisharx"
                >
                    <DevToIcon />
                </SocialLink>
                <SocialLink
                    isExternal
                    aria-label="Medium"
                    href="https://medium.com/@jaisharx"
                >
                    <MediumIcon />
                </SocialLink>
                <SocialLink
                    isExternal
                    aria-label="Dribble"
                    href="https://dribbble.com/jaisharx"
                >
                    <DribbleIcon />
                </SocialLink>
            </HStack>
        </Box>
    );
}

export default function Header() {
    return (
        <Box as={Container} type="header" mt={20}>
            <Grid templateColumns={{ md: '1fr', lg: '1.4fr 1fr' }}>
                <LeftColumn />
                <Box
                    pos="relative"
                    borderRadius="sm"
                    overflow="hidden"
                    display={{ base: 'none', lg: 'block' }}
                >
                    <NextImage
                        priority
                        layout="responsive"
                        placeholder="blur"
                        src={profileImageSrc}
                        alt="My Profile Image"
                    />
                </Box>
            </Grid>
        </Box>
    );
}
