import { Box } from '@chakra-ui/react'

export default function Container({ children, type, ...rest }) {
  return (
    <Box maxW="1320px" mx="auto" p={[4, 4, 8]} as={type} {...rest}>
      {children}
    </Box>
  )
}
