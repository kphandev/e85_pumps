// contains the single page application
import { ChakraProvider } from "@chakra-ui/react";
import Main from '../components/layouts/main'
import theme from '../libs/theme'
import { DrawerProvider } from '../context/DrawerContext';
import { NotificationProvider } from '../context/NotificationContext';
import { LocationProvider } from '../context/LocationContext';

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <NotificationProvider>
                <LocationProvider>
                    <DrawerProvider>
                        <Main router={router}>
                            <Component {...pageProps} key={router.route}></Component>
                        </Main>
                    </DrawerProvider>
                </LocationProvider>
            </NotificationProvider>
        </ChakraProvider>
    )
}

export default Website