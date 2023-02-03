import styled from '@emotion/styled'
import { ReactNode } from 'react'

import {
  Link as ChakraLink,
  LinkProps,
  useClipboard,
  useMediaQuery,
  useToast,
} from '@chakra-ui/react'

const CustomStyledLink = styled(ChakraLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border: 1px solid white;
  border-radius: 100%;

  svg {
    transform: scale(0.72);
  }

  @media (min-width: 48em) {
    width: 64px;
    height: 64px;

    svg {
      transform: scale(1);
    }
  }

  &:hover,
  &:active {
    background-color: white;
    svg {
      fill: black;
    }
  }

  &:focus {
    box-shadow: 0 0 0 3px #2dffc0;
  }
`

type SocialLinkProps = {
  socialType?: 'email'
  children: ReactNode
} & LinkProps

export default function SocialLink({
  socialType,
  children,
  ...props
}: SocialLinkProps) {
  const toast = useToast()
  const [isMobile] = useMediaQuery('(max-width: 62em)')
  const { onCopy } = useClipboard('sendtojsharma@gmail.com')

  const copyEmailToClipboard = () => {
    onCopy() // copy the text
    toast({
      containerStyle: { marginBottom: isMobile ? 2 : 12 },
      title: 'Email copied to the clipboard.',
      status: 'success',
      duration: 5000,
    })
  }

  if (socialType === 'email') {
    return (
      <CustomStyledLink
        onClick={copyEmailToClipboard}
        aria-label={props['aria-label']}
      >
        {children}
      </CustomStyledLink>
    )
  }

  return <CustomStyledLink {...props}>{children}</CustomStyledLink>
}
