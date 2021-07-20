import { Box } from '@chakra-ui/react';
import Card from './card';
import Container from './container';

import trypImageSrc from 'public/tryp.png';
import yellowjobsImageSrc from 'public/yellowjobs.png';

export default function Works() {
    return (
        <Box as="main">
            <Container>
                <Card
                    isWork
                    id="webapp"
                    count="01"
                    title="tryp.com"
                    badgeText="Recent"
                    imgSrc={trypImageSrc}
                    url="https://www.tryp.com/"
                >
                    Started working as core frontend developer for tryp,
                    designed and built tryp.com frontend, and currently
                    maintaining it.
                </Card>
                <Card
                    isWork
                    id="website"
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
