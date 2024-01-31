// a pseudo redirect that renders the app with certain info
import { useDrawer } from '../../context/DrawerContext';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('../../components/map'), {
    ssr: false,
});

const LocationPage = () => {
    const { setDrawerContentHandler } = useDrawer();

    useEffect(() => {
        setDrawerContentHandler('location');
    }, [])

    return (
        <>
            <MapWithNoSSR />
        </>
    );
};

export default LocationPage;