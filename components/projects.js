import { Box } from '@chakra-ui/react';
import Card from './card';
import Container from './container';

import devtoImageSrc from 'public/static/devto.png';
import nextjsImageSrc from 'public/static/nextjs.png';
import designwizImageSrc from 'public/static/designwiz.png';

export default function Projects() {
    return (
        <Box as="main">
            <Container>
                <Card
                    id="webapp"
                    count="01"
                    title="Dev.to Clone"
                    imgSrc={devtoImageSrc}
                    badgeText="Recent"
                    url="https://dev-to-pied.vercel.app/"
                    githubUrl="https://github.com/jaisharx/dev.to"
                >
                    Dev.to clone built by me from scratch. It's using react.js &
                    next.js as its framework, and chakra UI for themeability.
                </Card>
                <Card
                    id="website"
                    count="02"
                    title="Next.js Website"
                    imgSrc={nextjsImageSrc}
                    url="https://nextjs-org-website.vercel.app/"
                    githubUrl="https://github.com/jaisharx/nextjs.org"
                >
                    This repo is a recreation of the modern & sleek-looking
                    Next.js homepage. I've tried to get this as pixel-perfect as
                    possible.
                </Card>
                <Card
                    count="03"
                    title="Designwiz"
                    imgSrc={designwizImageSrc}
                    url="https://designwiz.vercel.app/"
                    githubUrl="https://github.com/jaisharx/designwiz"
                >
                    Landing page of a modern-looking website re-built by me,
                    scoring a 100/100 on a lighthouse audit (no kidding with
                    performance).
                </Card>
            </Container>
        </Box>
    );
}
