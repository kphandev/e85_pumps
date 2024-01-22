
import { Text, Flex, Image, Box, Spacer, Button, Icon } from "@chakra-ui/react";

const LocationGeneral = ({ data }) => {
    console.log(data)
    return (
        <Flex direction="column" p={4} bg="gray.100" borderRadius="md" boxShadow="base">
            <Flex align="center" mb={4}>
                <Image src="path-to-your-logo.png" alt="Station Logo" boxSize="50px" mr={2} />
                <Box>
                    <Text fontWeight="bold" fontSize="lg">Speedway #7104</Text>
                    <Text fontSize="sm">Status</Text>
                    <Text fontSize="sm">1203 McArthur St</Text>
                    <Text fontSize="sm">Manchester, TN 37355</Text>
                </Box>
            </Flex>

            <Flex direction="column" mb={4}>
                <Text fontSize="sm">Hours</Text>
                <Text fontSize="sm">Cards</Text>
                <Text fontSize="sm">Station Type</Text>
                <Text fontSize="sm">Last Updated</Text>
            </Flex>

            <Spacer />

            <Button colorScheme="orange" leftIcon={<Icon name="navigation" />}>Start Navigation</Button>
        </Flex>
    );
};

export default LocationGeneral;