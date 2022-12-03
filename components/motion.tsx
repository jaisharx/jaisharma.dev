import {
  Box,
  Text,
  TextProps,
  BoxProps,
  StackProps,
  HStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion<BoxProps>(Box)
const MotionText = motion<TextProps>(Text)
const MotionHStack = motion<StackProps>(HStack)

export { MotionBox, MotionText, MotionHStack }
