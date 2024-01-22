import Logo from './logo'
import NextLink from 'next/link'
import {
    Box,
    Container,
    Link,
    Stack,
    Heading,
    Flex,
    useColorModeValue
} from '@chakra-ui/react' 
import ThemeToggleButton from './theme-toggle-button'
import NavLinksContainer from './navlinks'

const LinkItem = ({ href, path, children }) => {
    const activeColor = useColorModeValue('whiteAlpha.900', 'gray.900');
    const inactiveColor = useColorModeValue('gray.900', 'whiteAlpha.900');
    const activeBgColor = useColorModeValue('orange.500', 'orange.200');

    const linkStyles = {
        p: 2,
        borderRadius: 'md',
        bg: path === href ? activeBgColor : undefined,
        color: path === href ? activeColor : inactiveColor,
    }

    return (
        <Link as={NextLink} href={href} {...linkStyles}>
            {children}
        </Link>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW='container.xl'
                wrap="wrap"
                align="center"
                alignItems="center"
                justify="space-between"
            >
                {/* Logo component */}
                <Flex align="center" mr={5} mt={2}>
                    <Heading as="h1" size="lg" letterSpacing={'normal'}>
                        <Logo />
                    </Heading>
                </Flex>

                {/* Desktop Menu */}
                <Flex direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }} flexGrow={1} mt={{ base: 4, nmd: 0 }}>
                    <NavLinksContainer />
                </Flex>

                <Box flex={1} align="right">
                    <ThemeToggleButton></ThemeToggleButton>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar