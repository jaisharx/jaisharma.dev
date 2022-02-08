import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import Confetti from 'react-confetti'
// import useWindowSize from 'react-use/lib/useWindowSize'

export default function ConfettiHeart() {
  const [onHover, setOnHover] = useState(false)

  return (
    <>
      <Box
        as="span"
        display="inline-block"
        cursor="pointer"
        onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        transition="transform .2s ease"
        _hover={{ transform: 'scale(1.4)' }}
      >
        ❤️
      </Box>
      <Confetti recycle={onHover} />
    </>
  )
}
