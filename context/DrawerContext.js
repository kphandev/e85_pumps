import React, { createContext, useState, useContext } from 'react';

const DrawerContext = createContext();

export const useDrawer = () => useContext(DrawerContext);

export const DrawerProvider = ({ children }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [drawerContent, setDrawerContent] = useState(null); // New state for drawer content

    const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

    // Function to set the content of the drawer
    const setDrawerContentHandler = (content) => {
        setDrawerContent(content);
        setDrawerOpen(true); // Automatically open the drawer when content is set
    };

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer, drawerContent, setDrawerContentHandler, setDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    );
};
