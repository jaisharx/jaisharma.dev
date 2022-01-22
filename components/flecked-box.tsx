import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Script from 'next/script'

type AppProps = {
  children: ReactNode
}

const FleckedContainer = styled(Box)`
  --fleck-seed: 12347;
  --fleck-count: 20;
  --fleck-size-base: 8px;

  --fleck-color-1: gray;

  background-image: paint(fleck);

  @media (max-width: 60em) {
    background-image: none;
  }
`

export default function FleckedBox({ children }: AppProps) {
  const FleckWorklet = `(async function () {
    if (CSS["paintWorklet"] === undefined) {
      await import("https://unpkg.com/css-paint-polyfill");
    }
  
    CSS.paintWorklet.addModule("./script/fleck-worklet.js");
  })();`

  return (
    <FleckedContainer>
      <Script
        dangerouslySetInnerHTML={{
          __html: FleckWorklet,
        }}
      />
      {children}
    </FleckedContainer>
  )
}
