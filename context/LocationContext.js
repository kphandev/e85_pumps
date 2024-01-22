import React, { createContext, useState, useContext } from 'react';

const LocationContext = createContext();

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
    const [selectedLocationId, setSelectedLocationId] = useState(null);
    const [selectedLocationName, setSelectedLocationName] = useState(null);

    return (
        <LocationContext.Provider value={{ selectedLocationId, setSelectedLocationId, selectedLocationName, setSelectedLocationName }}>
            {children}
        </LocationContext.Provider>
    );
};