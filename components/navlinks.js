import React from 'react';
import { Button } from '@chakra-ui/react';
import { useDrawer } from '../context/DrawerContext';
import { FaUser, FaCog } from 'react-icons/fa'; // Example icons

const NavItem = ({ onClick, icon, label }) => {
    return (
        <Button onClick={onClick} leftIcon={icon} variant="ghost">
            {label}
        </Button>
    );
};


const NavLinksContainer = () => {
    const { setDrawerContentHandler } = useDrawer();

    const handleActionClick = (action) => {
        // Define specific actions based on the link
        switch (action) {
            case 'profile':
                setDrawerContentHandler('profile');
                break;
            case 'settings':
                setDrawerContentHandler('settings');
                break;
        }
    };

    const actions = [
        { action: 'profile', icon: <FaUser />, label: 'Profile' },
        { action: 'settings', icon: <FaCog />, label: 'Settings' }
    ];

    return (
        <>
            {actions.map(({ action, icon, label }, index) => (
                <NavItem key={index} onClick={() => handleActionClick(action)} icon={icon} label={label} />
            ))}
        </>
    );
};

export default NavLinksContainer;