import React, { useEffect, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, useBreakpointValue, VStack, Box, Flex } from "@chakra-ui/react";

import LocationGeneral from './location-general'
import LocationImages from './location-images'
import LocationComments from './location-comments';

const LocationInfo = ({ locationId }) => {
    const [data, setDrawerData] = useState(null);
    const isMobile = useBreakpointValue({ base: true, md: false });
    const testImages = [

    ]

    const testComments = [
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
                <Flex direction="column">
                    <Tabs colorScheme='orange' flex="1">
                        <TabList justifyContent="space-between">
                            <Tab>General</Tab>
                            <Tab>Images</Tab>
                            <Tab>Comments</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel height="50vh"><LocationGeneral data={data} /></TabPanel>
                            <TabPanel height="50vh"><LocationImages initialData={testImages} /></TabPanel>
                            <TabPanel height="50vh"><LocationComments data={testComments} /></TabPanel>
                        </TabPanels>
                    </Tabs>
                </Flex>
            ) : (
                <VStack spacing={4} align="stretch" height="100%">
                    <Box flex={1} py={5}><LocationGeneral data={data} /></Box>
                    <Box flex={1} py={5}><LocationImages initialData={testImages} /></Box>
                    <Box flex={1} py={5}><LocationComments data={testComments} /></Box>
                </VStack>
            )}
        </>
    )
}

export default LocationInfo