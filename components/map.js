import React, { useEffect, useState, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useColorModeValue, Button, Flex, Box, Text } from '@chakra-ui/react';

import { useDrawer } from '../context/DrawerContext';
import { useLocation } from '../context/LocationContext';
import { useNotification } from '../context/NotificationContext';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// icons
const customIcon = new L.Icon({
    iconUrl: './images/e85_icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

// getting and setting markers in cache
// TODO asdf but also prob store based on radius
const saveMarkersToCache = (markers) => {
    localStorage.setItem('markers', JSON.stringify(markers));
};

const getMarkersFromCache = () => {
    const markers = localStorage.getItem('markers');
    return markers ? JSON.parse(markers) : [];
};

const Map = () => {
    // map related items
    const mapRef = useRef(null);
    const defaultPosition = [39.50, -98.35];
    const [position, setPosition] = useState(defaultPosition);
    const [markers, setMarkers] = useState([]);

    // used to pan over to current location
    const updateMapView = (lat, lng) => {
        const map = mapRef.current;
        if (map != null) {
            map.flyTo([lat, lng], map.getZoom());
        }
    };

    // drawer related items
    const { setDrawerContentHandler } = useDrawer();
    const { setSelectedLocationId, setSelectedLocationName } = useLocation();

    // styling
    const buttonColorScheme = useColorModeValue('orange', 'orange');
    const tileLayerURL = useColorModeValue("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png")

    useEffect(() => { 
        const getUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setPosition([position.coords.latitude, position.coords.longitude]);
                        updateMapView(position.coords.latitude, position.coords.longitude);
                    },
                    () => {
                        console.log("Location access denied. Using default position.");
                        setPosition(defaultPosition);
                    }
                );
            } else {
                console.log("Geolocation is not supported by this browser.");
                setPosition(defaultPosition);
            }
        };

        getUserLocation();

        const fetchMarkers = async () => {
            try {
                // const response = await fetch('your-api-endpoint');
                // const data = await response.json();
                // Assuming 'data' is the array of markers

                // SAMPLE DATA
                const data = [{
                    position: [36.0695018, -94.2230936],
                    id: "1",
                    name: "Marker One",
                    status: "active"
                },
                {
                    position: [36.05, -94.225],
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
        const buttonAction = () => {
            console.log("REPORTED!")
        }

        const reportButton = <Button onClick={buttonAction}>Report</Button>
        showNotification('You are about to snitch. You sure?', 'Reporting Location', reportButton);
    };

    const popupBackgroundColor = useColorModeValue('white', '#2d3748');
    const popupTextColor = useColorModeValue('black', 'white');
    const popupStyle = useMemo(() => `
        .leaflet-popup-content-wrapper, .leaflet-popup-tip {
            background-color: ${popupBackgroundColor};
            color: ${popupTextColor};
            /* Other custom styles */
        }
    `, [popupBackgroundColor, popupTextColor]);

    console.log('position', position)

    return (
        <>
            <style>{popupStyle}</style>
            <MapContainer
                ref={mapRef}
                zoom={12}
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
                            <Flex direction="column" p={2} >
                                <Box mb={3}>
                                    <Text><strong>ID:</strong> {marker.id}</Text>
                                    <Text><strong>Name:</strong> {marker.name}</Text>
                                    <Text><strong>Status:</strong> {marker.status}</Text>
                                </Box>
                                <Flex justify="center" gap={2} >
                                    <Button colorScheme={buttonColorScheme} size="sm" onClick={() => handleDetailsClick(marker)}>Details</Button>
                                    <Button colorScheme={buttonColorScheme} size="sm" onClick={() => handleError()}>Report</Button>
                                </Flex>
                            </Flex>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>

    );
};

export default Map;
