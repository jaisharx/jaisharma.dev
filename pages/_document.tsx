import Document, { Html, Head, Main, NextScript } from 'next/document';
import Analytics from 'lib/analytics';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <Analytics />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
