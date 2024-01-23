
import { Text, Flex, Image, Box, Spacer, Button, Icon, useColorModeValue } from "@chakra-ui/react";

const LocationGeneral = ({ data }) => {
    console.log(data)
    const textColor = useColorModeValue('gray.800', 'white');

    return (
        <Flex direction="column" color={textColor} borderRadius="md" height="full">
            <Box flex="1">
                <Flex align="center" mb={4}>
                    <Image
                        src="https://play-lh.googleusercontent.com/q4EnunphaylG13iiSE82JW3gp_zcsCVszVqwZkIV69ZtleUExtqabcIk3ZTmc6jemL0"
                        borderRadius="10px"
                        alt="Station Logo"
                        boxSize="100px"
                        mr={2}
                    />
                    <Box>
                        <Text fontWeight="bold" fontSize="lg">Speedway #7104</Text>
                        <Text fontSize="sm">1203 McArthur St</Text>
                        <Text fontSize="sm">Manchester, TN 37355</Text>
                        <Text fontSize="sm">Status: Open</Text>
                    </Box>
                </Flex>

                <Flex direction="column" mb={4}>
                    <Text fontSize="sm">Hours</Text>
                    <Text fontSize="sm">Cards</Text>
                    <Text fontSize="sm">Station Type</Text>
                    <Text fontSize="sm">Last Updated</Text>
                </Flex>
            </Box>

            <Spacer />

            <Button colorScheme="orange" leftIcon={<Icon name="navigation" />}>Start Navigation</Button>
        </Flex>
    );
};

export default LocationGeneral;