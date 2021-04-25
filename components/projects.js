import { Box, Grid } from '@chakra-ui/react';
import { Container } from './container';

import NextImage from 'next/image';

export default function Projects() {
    return (
        <Box id="#projects">
            <Container>
                <Grid templateColumns="repeat(2, 1fr)" gap="5">
                    <Box boxShadow="md">
                        <NextImage
                            src="/medium.png"
                            width="655"
                            height="614"
                        />
                    </Box>
                    <NextImage src="/dev.to.png" width="655" height="614" />
                    <NextImage src="/nextjs.png" width="655" height="614" />
                    <NextImage src="/project2.png" width="655" height="614" />
                </Grid>
                <Grid templateColumns="repeat(3, 1fr)" gap="5" mt="5">
                    <NextImage src="/project5.png" width="437" height="307" />
                    <NextImage src="/project6.png" width="437" height="307" />
                    <NextImage src="/project7.png" width="437" height="307" />
                    {/* <NextImage src="/project5.png" width="437" height="307"/>
                    <NextImage src="/project5.png" width="437" height="307"/>
                    <NextImage src="/project5.png" width="437" height="307"/> */}
                </Grid>
            </Container>
        </Box>
    );
}