import { Box } from '@chakra-ui/react'
import Card from './card'
import Container from './container'

import trypImageSrc from 'public/static/tryp.png'
import yellowjobsImageSrc from 'public/static/yellowjobs.png'

export default function Works() {
  return (
    <Box as={Container} type="section">
      <Card
        isWork
        count="01"
        title="tryp.com"
        badgeText="Ongoing (3+ years)"
        imgSrc={trypImageSrc}
        url="https://www.tryp.com/"
      >
        Joined as a core FE engineer in a danish based startup in 2021, helping
        revolutionize the travel industry.
      </Card>
      <Card
        isWork
        count="02"
        title="Open source projects"
        badgeText="Summer, 2021"
        imgSrc={yellowjobsImageSrc}
        url="https://yellowjobs.org/"
      >
        Worked as a volunteer, and helped the team with two mid size react based
        applications - covid.army & yellowjobs.com
      </Card>
    </Box>
  )
}
