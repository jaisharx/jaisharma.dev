import ClientProviders from 'components/client-providers'
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
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  )
}
