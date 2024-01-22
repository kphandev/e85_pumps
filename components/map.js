import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useColorModeValue, Button, Flex, Box, Text } from '@chakra-ui/react';
import { useDrawer } from '../context/DrawerContext';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useNotification } from '../context/NotificationContext';
import { useLocation } from '../context/LocationContext';

// icons
const customIcon = new L.Icon({
    iconUrl: './images/e85_icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

// getting and setting markers in cache
const saveMarkersToCache = (markers) => {
    localStorage.setItem('markers', JSON.stringify(markers));
};

const getMarkersFromCache = () => {
    const markers = localStorage.getItem('markers');
    return markers ? JSON.parse(markers) : [];
};

const Map = () => {
    const { setDrawerContentHandler } = useDrawer();
    const { setSelectedLocationId, setSelectedLocationName } = useLocation();
    const [markers, setMarkers] = useState([]);

    const buttonColorScheme = useColorModeValue('orange', 'orange');
    const tileLayerURL = useColorModeValue("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png")

    useEffect(() => {
        const fetchMarkers = async () => {
            try {
                // const response = await fetch('your-api-endpoint');
                // const data = await response.json();
                // Assuming 'data' is the array of markers

                // SAMPLE DATA
                const data = [{
                    position: [51.505, -0.09],
                    id: "1",
                    name: "Marker One",
                    status: "active"
                },
                {
                    position: [51.515, -0.10],
                    id: "2",
                    name: "Marker Two",
                    status: "inactive"
                }]

                saveMarkersToCache(data);
                setMarkers(data);
            } catch (error) {
                console.error("Error fetching markers:", error);
            }
        };

        fetchMarkers();
        setMarkers(getMarkersFromCache());

    }, []);


    const handleDetailsClick = (marker) => {
        setSelectedLocationId(marker.id);
        setSelectedLocationName(marker.name);
        setDrawerContentHandler('location'); // Assuming 'location' indicates LocationInfo content
    };

    // notifcation test
    const { showNotification } = useNotification();
    const handleError = () => {
        showNotification('You are about to snitch. You sure?', 'error');
    };

    const position = [51.505, -0.09];

    return (
        <MapContainer
            zoom={13}
            center={position}
            style={{
                height: '85vh',
                borderRadius: '5px',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
            }}
        >
            <TileLayer url={tileLayerURL} />
            {markers.map((marker, index) => (
                <Marker
                    key={index}
                    position={marker.position}
                    icon={customIcon}
                >
                    <Popup>
                        <Flex direction="column" p={2}>
                            <Box mb={3}>
                                <Text><strong>ID:</strong> {marker.id}</Text>
                                <Text><strong>Name:</strong> {marker.name}</Text>
                                <Text><strong>Status:</strong> {marker.status}</Text>
                            </Box>
                            <Flex justify="center" gap={2}>
                                <Button colorScheme={buttonColorScheme} size="sm" onClick={() => handleDetailsClick(marker)}>Details</Button>
                                <Button colorScheme={buttonColorScheme} size="sm" onClick={() => handleError()}>Report</Button>
                            </Flex>
                        </Flex>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;