import './global.css'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

import SEOData from 'seo.config.json'

export const metadata = {
  title: SEOData.title,
  description: SEOData.desc,
  openGraph: {
    title: SEOData.title,
    description: SEOData.desc,
    images: ['http://jaisharma.dev/preview.png'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  )
}
