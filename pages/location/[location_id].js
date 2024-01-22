// import { useRouter } from 'next/router';
import { useDrawer } from '../../context/DrawerContext';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('../../components/map'), {
    ssr: false,
});


const LocationPage = () => {
    const { toggleDrawer } = useDrawer();

    useEffect(() => {
        toggleDrawer();
    }, [])

    return (
        <>
            <MapWithNoSSR />
        </>
    );
};

export default LocationPage;