import { Box, Text, Heading, HStack, Link, Badge } from '@chakra-ui/react';
import NextImage from 'next/image';
import styled from '@emotion/styled';
import '@fontsource/monoton';

const CustomLink = styled(Link)`
    font-size: 1.5rem;
    font-weight: 500;
    color: #2dffc0;

    &:focus {
        box-shadow: 0 0 0 3px currentColor;
    }
`;

const BulletDot = styled(Text)`
    font-size: 1.5rem;
    font-weight: 500;
    color: #2dffc0;
`;

export default function Card({
    id,
    count,
    title,
    imgSrc,
    url,
    badgeText,
    isWork,
    githubUrl,
    children,
}) {
    return (
        <Box id={id} color="white" mt={28} as="article">
            <Text fontSize={{ base: '5xl', lg: '8xl' }} fontFamily="Monoton">
                {isWork ? 'Work' : 'Project'} {count}
            </Text>
            <HStack mt={2}>
                <Heading
                    fontSize={{ base: 'lg', md: '3xl' }}
                    textTransform="uppercase"
                >
                    {title.toUpperCase()}
                </Heading>
                {badgeText && (
                    <Badge fontSize="md" variant="solid" colorScheme="green">
                        {badgeText}
                    </Badge>
                )}
            </HStack>
            <Text
                mt={6}
                fontSize={{ base: 'lg', lg: '3xl' }}
                maxW={{ base: '100%', lg: '70%' }}
            >
                {children}
            </Text>
            <HStack mt={12}>
                <CustomLink href={url} isExternal>
                    Live Url
                </CustomLink>
                {!isWork && (
                    <>
                        <BulletDot>•</BulletDot>
                        <CustomLink href={githubUrl} isExternal>
                            Source Code
                        </CustomLink>
                    </>
                )}
            </HStack>
            <Box borderRadius="md" overflow="hidden" mt={{ base: 4, lg: 12 }}>
                <Link
                    href={url}
                    isExternal
                    _focus={{ boxShadow: '0 0 0 3px #2dffc0' }}
                >
                    <NextImage
                        alt={title}
                        src={imgSrc}
                        width="1280"
                        height="800"
                        placeholder="blur"
                        objectFit="cover"
                    />
                </Link>
            </Box>
        </Box>
    );
}