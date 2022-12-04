import { useRef, useState, useEffect } from 'react'
import { MotionBox } from './motion'
import { Box } from '@chakra-ui/react'

export default function MovingCircle() {
  const ref = useRef(null)
  const [{ x, y }, setPoint] = useState({ x: -18, y: 60 })

  useEffect(() => {
    if (!ref.current) return

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!

      const x = clientX - element.offsetLeft - element.offsetWidth / 12
      const y = clientY - element.offsetTop - element.offsetHeight / 12

      console.log(x, y)

      setPoint({ x, y })
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <MotionBox
      ref={ref}
      pos="absolute"
      className="box"
      initial={{ x: -18, y: -30 }}
      animate={{
        x,
        y,
        transition: {
          type: 'spring',
          damping: 7,
          stiffness: 50,
          restDelta: 0.001,
        },
      }}
    >
      <Box borderRadius="full" h="20" w="20" bg="white" opacity=".4" />
    </MotionBox>
  )
}
