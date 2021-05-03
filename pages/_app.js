import { ChakraProvider } from '@chakra-ui/react';
import NextHead from 'components/next-head';
import content from 'lib/seo';
import GloablCSS from 'styles/globals';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextHead title={content.title} desc={content.desc} />
            <ChakraProvider>
                <GloablCSS />
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}

export default MyApp;
