import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>E85 Pumps</title>
            </Head>

            <Navbar path={router.asPath}></Navbar>

            <Container maxW="container.xl" pt="20">
                {children}
            </Container>
        </Box>
    )
}

export default Main