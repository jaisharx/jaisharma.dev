import {
  Link,
  Heading,
  useClipboard,
  useToast,
  useMediaQuery,
} from '@chakra-ui/react'
import { MotionBox } from './motion'
import Container from './container'
import FleckedBox from './flecked-box'

export default function Footer() {
  const [isMobile] = useMediaQuery('(max-width: 62em)')

  const DepthShadow =
    '1px 1px 0px #161919, 2px 2px 0px #161919, 3px 3px 0px #161919, 4px 4px 0px #161919, 5px 5px 0px #161919, 6px 6px 0px #161919, 7px 7px 0px #161919, 8px 8px 0px #161919, 9px 9px 0px #161919, 10px 10px 0px #161919, 11px 11px 0px #161919, 12px 12px 0px #161919;'

  const { onCopy } = useClipboard('sendtojsharma@gmail.com')
  const toast = useToast()

  const copyEmailToClipboard = () => {
    onCopy() // copy the text
    toast({
      containerStyle: { marginBottom: isMobile ? 2 : 12 },
      title: 'Email copied to the clipboard.',
      status: 'success',
      duration: 5000,
    })
  }

  return (
    <FleckedBox>
      <Container type="footer">
        <MotionBox
          py={{ base: 20, md: 80 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: isMobile ? 0 : 0.5 }}
        >
          <Heading
            color="white"
            fontSize={{ base: '26px', md: '62px', lg: '92px' }}
            textShadow={{ base: 'none', md: DepthShadow }}
          >
            Like what you see? <br /> Reach out to me at <br />
            <Link
              onClick={copyEmailToClipboard}
              transition=".2s all ease"
              _focus={{ boxShadow: 'none' }}
              _hover={{ borderBottom: '12px solid #2DFFC0' }}
            >
              sendtojsharma@gmail.com
            </Link>
          </Heading>
        </MotionBox>
      </Container>
    </FleckedBox>
  )
}
