import { Box, useColorModeValue, Flex, Icon } from '@chakra-ui/react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { FaHome, FaSearch, FaUser } from 'react-icons/fa'; // Example icons

const mapStyles = {
    light: [],
    dark: [
        { "elementType": "geometry", "stylers": [{ "color": "#242f3e" }] },
        { "elementType": "labels.text.stroke", "stylers": [{ "color": "#242f3e" }] },
        { "elementType": "labels.text.fill", "stylers": [{ "color": "#746855" }] },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#d59563" }]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#d59563" }]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{ "color": "#263c3f" }]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#6b9a76" }]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{ "color": "#38414e" }]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#212a37" }]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#9ca5b3" }]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [{ "color": "#746855" }]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{ "color": "#1f2835" }]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#f3d19c" }]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{ "color": "#2f3948" }]
        },
        {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#d59563" }]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{ "color": "#17263c" }]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#515c6d" }]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [{ "color": "#17263c" }]
        }
    ]
};


const containerStyle = {
    width: '100%',
    height: '80vh'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const Page = () => {
    const currentMapStyle = useColorModeValue(mapStyles.light, mapStyles.dark);

    return (
        <Box maxW='container.xl'>
            <LoadScript >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    options={{ styles: currentMapStyle }}
                    center={center}
                    zoom={10}
                >
                </GoogleMap>
            </LoadScript>
            <Flex
                position="fixed"
                bottom="0"
                left="0"
                right="0"
                py="2"
                justifyContent="space-between"
                alignItems="center"
                bg="gray.100" // Change based on theme
                px="6"
            >
                <Icon as={FaHome} w={6} h={6} />
                <Icon as={FaSearch} w={6} h={6} />
                <Icon as={FaUser} w={6} h={6} />
            </Flex>
        </Box>
    )
}

export default Page