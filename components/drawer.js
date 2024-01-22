import { React } from 'react';
import { Drawer, DrawerOverlay, DrawerContent, useBreakpointValue, DrawerBody, DrawerHeader } from '@chakra-ui/react';
import { useDrawer } from '../context/DrawerContext';


const InfoDrawer = ({ title, children }) => {
    const { isDrawerOpen, toggleDrawer } = useDrawer();
    // const isMobile = useBreakpointValue({ base: true, md: false });

    const drawerProps = useBreakpointValue({
        base: { width: '100vw', height: '65vh', placement: 'bottom' },
        md: { width: '40vw', height: '100vh', placement: 'right' }
    });

    return (
        <Drawer
            placement={drawerProps.placement}
            onClose={toggleDrawer}
            isOpen={isDrawerOpen}
        >
            <DrawerOverlay />
            <DrawerContent maxW={drawerProps.width} height={drawerProps.height}>
                <DrawerHeader>{title}</DrawerHeader>
                <DrawerBody>
                    {children}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default InfoDrawer;