import {
  Box,
  Text,
  TextProps,
  BoxProps,
  StackProps,
  HStack,
  Heading,
  HeadingProps,
  Wrap,
  WrapProps,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion<BoxProps>(Box)
const MotionText = motion<TextProps>(Text)
const MotionHeading = motion<HeadingProps>(Heading)
const MotionHStack = motion<StackProps>(HStack)
const MotionWrap = motion<WrapProps>(Wrap)

export { MotionBox, MotionText, MotionHStack, MotionHeading, MotionWrap }
