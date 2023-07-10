'use client'

import { ChakraProvider } from '@chakra-ui/react'

import GloablCSS from 'styles/globals'
import Analytics from 'components/analytics'

export default function ClientProviders({ children }) {
  return (
    <>
      <ChakraProvider>
        <GloablCSS />
        <Analytics />
        {children}
      </ChakraProvider>
    </>
  )
}
