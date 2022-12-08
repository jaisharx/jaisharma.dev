import { Box } from '@chakra-ui/react'
import Card from './card'
import Container from './container'

import nextZeroIntlSrc from 'public/static/next-zero-intl.png'
import devtoImageSrc from 'public/static/devto.png'
import nextjsImageSrc from 'public/static/nextjs.png'
import designwizImageSrc from 'public/static/designwiz.png'

export default function Projects() {
  return (
    <Box as={Container} type="section">
      <Card
        isDoc
        count="01"
        title="Next Zero Intl"
        imgSrc={nextZeroIntlSrc}
        docUrl="https://next-zero-intl-docs.vercel.app/"
        url="https://next-zero-intl-demo.vercel.app/"
        githubUrl="https://github.com/jaisharx/next-zero-intl"
      >
        Next Zero Intl is a NPM package that does automatic translations to more
        than 100 locales with the help of Google Translate.
      </Card>
      <Card
        id="webapp"
        count="02"
        title="Dev.to Clone"
        imgSrc={devtoImageSrc}
        url="https://dev-to-pied.vercel.app/"
        githubUrl="https://github.com/jaisharx/dev.to"
      >
        An attempt to clone the dev.to homepage from scratch using react,
        next.js and chakra UI pixel-perfect, and connected with real API.
      </Card>
      <Card
        id="website"
        count="03"
        title="Next.js Website"
        imgSrc={nextjsImageSrc}
        url="https://nextjs-org-website.vercel.app/"
        githubUrl="https://github.com/jaisharx/nextjs.org"
      >
        Big fan of vercel's design system/choices, had to try to build a
        pixel-perfect replica of their next.js homepage (using next.js).
      </Card>
      <Card
        count="04"
        title="Designwiz"
        imgSrc={designwizImageSrc}
        url="https://designwiz.vercel.app/"
        githubUrl="https://github.com/jaisharx/designwiz"
      >
        Portfolio wouldn't be complete if there wasn't a project scoring a
        100/100 on a lighthouse audit (test with chrome ext disabled).
      </Card>
    </Box>
  )
}
