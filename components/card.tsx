import { Box, Text, Heading, Link, Badge, Wrap, HStack } from '@chakra-ui/react'
import { MotionBox } from './motion'
import { ReactNode } from 'react'
import { Variants } from 'framer-motion'

import NextImage from 'next/image'
import styled from '@emotion/styled'
import '@fontsource/monoton'

const CustomLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 500;
  color: #2dffc0;

  &:focus {
    box-shadow: 0 0 0 3px currentColor;
  }
`

const BulletDot = styled(Text)`
  font-size: 1.5rem;
  font-weight: 500;
  color: #2dffc0;
`

type CardProps = {
  id?: string
  count: string
  title: string
  imgSrc: any
  url: string
  badgeText?: string
  isWork?: boolean
  isDoc?: boolean
  githubUrl?: string
  docUrl?: string
  children: ReactNode
}

const CardVariants: Variants = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function Card({
  id,
  count,
  title,
  imgSrc,
  url,
  badgeText,
  isWork,
  isDoc,
  docUrl,
  githubUrl,
  children,
}: CardProps) {
  return (
    <MotionBox
      id={id}
      mt={28}
      color="white"
      as="article"
      initial="hidden"
      whileInView="visible"
      variants={CardVariants}
      viewport={{ once: true, amount: 0.1 }}
    >
      <Box>
        <Text fontFamily="Monoton" fontSize={{ base: '5xl', lg: '8xl' }}>
          {isWork ? 'Work' : 'Project'} {count}
        </Text>
        <Wrap mt={2} align="center">
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
        </Wrap>
        <Text
          mt={6}
          fontSize={{ base: 'lg', lg: '3xl' }}
          maxW={{ base: '100%', lg: '70%' }}
        >
          {children}
        </Text>
        <HStack mt={12}>
          {!isWork && isDoc && (
            <>
              <CustomLink href={docUrl} isExternal>
                Docs
              </CustomLink>
              <BulletDot>•</BulletDot>
            </>
          )}
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
      </Box>

      <Box>
        <MotionBox
          borderRadius="md"
          whileHover={{
            boxShadow: '0 0 20px white',
            transition: { duration: 0.2 },
          }}
        >
          <Box borderRadius="md" overflow="hidden" mt={{ base: 4, lg: 12 }}>
            <Link href={url} isExternal>
              <NextImage
                alt={title}
                src={imgSrc}
                layout="responsive"
                placeholder="blur"
              />
            </Link>
          </Box>
        </MotionBox>
      </Box>
    </MotionBox>
  )
}
