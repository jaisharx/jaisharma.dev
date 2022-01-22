import React, { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Script from 'next/script'

type AppProps = {
  children: ReactNode
}

const FleckedContainer = styled(Box)`
  --fleck-seed: 12347;
  --fleck-count: 40;
  --fleck-size-base: 4px;

  --fleck-color-1: #fe9f00;
  --fleck-color-2: #100b10;
  --fleck-color-3: #ffffff;

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
  
    // The code for this worklet can be found here: https://github.com/georgedoescode/houdini-fleck-patterns/blob/main/fleck-worklet.js
    CSS.paintWorklet.addModule("https://unpkg.com/@georgedoescode/houdini-fleck");
  
    // Fix a weird Safari/Firefox polyfill issue...
    setTimeout(() => {
      document.querySelectorAll(".fleck-demo").forEach((el) => {
        el.style.width = "100%";
      });
    }, 250);
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
