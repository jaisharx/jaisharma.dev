'use client'

import { ChakraProvider } from '@chakra-ui/react'

import NextHead from 'components/next-head'
import GloablCSS from 'styles/globals'
import Analytics from 'components/analytics'

export default function AppProviders({ children }) {
  return (
    <>
      <NextHead />
      <ChakraProvider>
        <GloablCSS />
        <Analytics />
        {children}
      </ChakraProvider>
    </>
  )
}
