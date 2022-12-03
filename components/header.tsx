import { Box, Grid, Link } from '@chakra-ui/react'
import { MotionBox, MotionHStack, MotionText } from './motion'
import { Variants } from 'framer-motion'

import styled from '@emotion/styled'
import NextImage from 'next/image'
import Container from './container'

import GmailIcon from './icons/gmail-icon'
import GithubIcon from './icons/github-icon'
import DevToIcon from './icons/devto-icon'
import MediumIcon from './icons/medium-icon'

import profileImageSrc from 'public/static/profile.webp'

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
`

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
`

const HeaderTextVarients: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function LeftColumn() {
  return (
    <MotionBox
      as="main"
      color="white"
      initial="hidden"
      animate="animate"
      variants={HeaderTextVarients}
    >
      <MotionText variants={HeaderTextVarients} fontSize="4xl" lineHeight="1">
        JS
      </MotionText>
      <MotionText
        fontWeight="light"
        mt={{ base: 24, lg: 28 }}
        variants={HeaderTextVarients}
        fontSize={{ base: '2xl', lg: '4xl' }}
      >
        Hi, there ✋
      </MotionText>
      <MotionText
        mt={4}
        variants={HeaderTextVarients}
        fontSize={{ base: '4xl', lg: '5xl' }}
      >
        I’m Jai Sharma.
      </MotionText>
      <MotionText
        mt={6}
        variants={HeaderTextVarients}
        fontSize={{ base: 'medium', md: 'large' }}
        maxW={{ base: '98%', lg: '85%' }}
      >
        I’m a Software Developer based in New Delhi, India. I specialize in
        creating high quality{' '}
        <FancyUnderline href="#website">websites</FancyUnderline> &{' '}
        <FancyUnderline href="#webapp">webapps</FancyUnderline> made with ❤️ of
        modern web technologies.
      </MotionText>
      <MotionHStack
        mt={10}
        spacing={{ base: 5, lg: 9 }}
        variants={HeaderTextVarients}
      >
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
      </MotionHStack>
    </MotionBox>
  )
}

export default function Header() {
  return (
    <Box as={Container} type="header">
      <Grid templateColumns={{ md: '1fr', lg: '1.4fr 1fr' }} mt={20}>
        <LeftColumn />
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.8,
            },
          }}
          pos="relative"
          display={{ base: 'none', lg: 'block' }}
        >
          <NextImage
            priority
            layout="responsive"
            placeholder="blur"
            src={profileImageSrc}
            alt="My Profile Image"
          />
        </MotionBox>
      </Grid>
    </Box>
  )
}
