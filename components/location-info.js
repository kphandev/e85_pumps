import React, { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, useBreakpointValue } from "@chakra-ui/react";

import LocationGeneral from './location-general'
import LocationImages from './location-images'
import LocationComments from './location-comments';

const LocationInfo = ({ locationId }) => {
    const [data, setDrawerData] = useState(null);
    const isMobile = useBreakpointValue({ base: true, md: false });
    const testImages = [
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
            alt: 'random'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
            alt: 'random'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
            alt: 'random'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
            alt: 'random'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
            alt: 'random'
        },
        {
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
            alt: 'random'
        }
    ]

    const testComments = [
        { content: 'testing 123', likes: 10, dislikes: 10, date: '1234' }
    ]

    useEffect(() => {
        if (locationId) {
            // Replace 'your-api-endpoint' with your actual API endpoint
            // fetch(`your-api-endpoint/${locationId}`)
            //     .then(response => response.json())
            //     .then(data => setDrawerData(data))
            //     .catch(error => console.error('Error fetching drawer data:', error));
            setDrawerData(locationId)
        }
    }, [locationId]);

    return (
        <>
            {isMobile ? (
                <Tabs>
                    <TabList>
                        <Tab>General</Tab>
                        <Tab>Images</Tab>
                        <Tab>Comments</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><LocationGeneral data={data} /></TabPanel>
                        <TabPanel><LocationImages data={testImages} /></TabPanel>
                        <TabPanel><LocationComments data={testComments} /></TabPanel>
                    </TabPanels>
                </Tabs>
            ) : (
                <>
                    <LocationGeneral data={data} />
                    <LocationImages data={testImages} />
                    <LocationComments data={testComments} />
                </>
            )}
        </>
    )
}

export default LocationInfo