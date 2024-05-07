import { useRef } from 'react'
import { MotionBox } from './motion'
import { Box } from '@chakra-ui/react'

export default function MovingCircle() {
  const ref = useRef<HTMLElement>(null)

  return (
    <MotionBox
      ref={ref}
      zIndex="-1"
      pos="absolute"
      className="box"
      initial={{ x: -20, y: 60 }}
    >
      <Box borderRadius="full" h="20" w="20" bg="white" opacity=".4" />
    </MotionBox>
  )
}
