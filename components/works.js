import { Box } from '@chakra-ui/react';
import Card from './card';
import Container from './container';

import trypImageSrc from 'public/static/tryp.png';
import yellowjobsImageSrc from 'public/static/yellowjobs.png';

export default function Works() {
    return (
        <Box as="main">
            <Container>
                <Card
                    isWork
                    count="01"
                    title="tryp.com"
                    badgeText="Recent"
                    imgSrc={trypImageSrc}
                    url="https://www.tryp.com/"
                >
                    Joined as a core frontend developer in a danish based
                    startup - Tryp. Helped designed & built tryp.com from
                    scratch.
                </Card>
                <Card
                    isWork
                    count="02"
                    title="Open source projects"
                    imgSrc={yellowjobsImageSrc}
                    url="https://yellowjobs.org/"
                >
                    Worked as a volunteer, and helped the team with two mid size
                    react based applications - covid.army & yellowjobs.com
                </Card>
            </Container>
        </Box>
    );
}
