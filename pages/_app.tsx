import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import NextHead from 'components/next-head';
import content from 'lib/seo';
import GloablCSS from 'styles/globals';
import Analytics from 'components/analytics';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextHead title={content.title} desc={content.desc} />
            <ChakraProvider>
                <GloablCSS />
                <Analytics />
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default MyApp;
