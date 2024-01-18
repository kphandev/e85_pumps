import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ isDarkMode }) => {
    const position = [51.505, -0.09]; // Replace with your coordinates
    const tileLayerURL = isDarkMode
        ? "https://{s}.darktile.openstreetmap.org/{z}/{x}/{y}.png" // URL for dark mode tiles
        : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; // URL for light mode tiles

    return (
        <MapContainer center={position} zoom={13} style={{ height: '100vh' }}>
            <TileLayer url={tileLayerURL} />
            <Marker position={position}>
                <Popup>A sample popup</Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;