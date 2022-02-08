import Footer from 'components/footer'
import Header from 'components/header'
import Works from 'components/works'
import Projects from 'components/projects'
import { Box } from '@chakra-ui/react'

export default function Homepage() {
  return (
    <Box
      borderWidth={{ base: '4px', md: '8px' }}
      borderColor="#474a49"
      borderStyle="solid"
      borderBottom="none"
      borderTop="none"
    >
      <Header />
      <Works />
      <Projects />
      <Footer />
    </Box>
  )
}
