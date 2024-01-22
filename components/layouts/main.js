import Head from 'next/head'
import { Box, Container, useBreakpointValue } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer';
import InfoDrawer from '../drawer';
import Notification from '../notification';
import LocationInfo from '../location-info';
import SettingsInfo from '../settings';
import ProfileInfo from '../profile';

import { useLocation } from '../../context/LocationContext';
import { useDrawer } from '../../context/DrawerContext';


const Main = ({ children, router }) => {
    const { drawerContent } = useDrawer();
    const { selectedLocationId, selectedLocationName } = useLocation();
    const isMobile = useBreakpointValue({ base: true, md: false });

    const renderDrawerContent = () => {
        const locationIdFromURL = router.query.location_id;
        const locationId = selectedLocationId || locationIdFromURL;

        switch (drawerContent) {
            case 'settings':
                return { title: 'Settings', content: <SettingsInfo /> };
            case 'profile':
                return { title: 'Profile', content: <ProfileInfo /> };
            case 'location':
                if (locationId) {
                    return { title: selectedLocationName, content: <LocationInfo locationId={locationId} /> };
                }
                break;
            default:
                return { title: 'No Content', content: <div>No content available</div> };
        }
    };

    const drawer = renderDrawerContent();


    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>E85 Pumps</title>
            </Head>

            <Notification></Notification>

            <Navbar path={router.asPath}></Navbar>

            {isMobile ? (
                <Box pt="20">
                    {children}
                </Box>
            ) : (
                <Container maxW="container.xl" pt="20">
                    <Box boxShadow="base" borderRadius="md">
                        {children}
                    </Box>
                </Container>
            )}

            <InfoDrawer title={drawer.title}>
                {drawer.content}
            </InfoDrawer>

            <Footer />
        </Box>
    )
}

export default Main