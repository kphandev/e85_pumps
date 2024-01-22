import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';

// map needs the window size, ssr does not provide that
const MapWithNoSSR = dynamic(() => import('../components/map'), {
    ssr: false,
});

const Page = () => {

    return (
        <Box maxW='container.xl'>
            <MapWithNoSSR />
        </Box>
    );
};
export default Page;

