import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import NavLinksContainer
 from './navlinks';
const Footer = () => {
    const bgColor = useColorModeValue('gray.100', 'gray.700');

    return (
        <Container>
            <Flex position="fixed" bottom="0" left="0" right="0" py="2" justifyContent="space-between" alignItems="center" display={{ base: "flex", md: "none" }} bg={bgColor} px="16">
                <NavLinksContainer />
            </Flex>
        </Container>
    );
};

export default Footer;