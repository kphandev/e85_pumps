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

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            href={href}
            p={2}
            bg={active ? '#F6AD55' : undefined}
            color={active ? '#202023' : inactiveColor}
            borderRadius="md"
        >
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
            bg={useColorModeValue('#ffffff40', '#202023980')}
            style={{ backdropFilter: 'blur(5px' }}
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
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo/>
                    </Heading>
                </Flex>

                {/* Desktop Menu */}
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems='center'
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/" path={path}>map</LinkItem>
                    <LinkItem href="/profile" path={path}>profile</LinkItem>
                    <LinkItem href="/settings" path={path}>settings</LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton></ThemeToggleButton>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar