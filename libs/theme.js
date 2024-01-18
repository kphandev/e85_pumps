import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// All variables are just configurations for extendTheme()
const styles = {
    global: props => ({
        body: {
            bg: mode('#EBF8FF', '#1A202C')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3D7aed', '#ff63c3')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const colors = {
    glassTeal: '#88ccca',
    darkBlue: {
        50: '#0d4270',
        100: '#0c3e6a',
        150: '#0b3b64',
        200: '#0b375e',
        250: '#0a3458',
        300: '#093052',
        350: '#092d4c',
        400: '#082946',
        450: '#072640',

        500: '#07233B',

        550: '#062037',
        600: '#061e33',
        650: '#051b2f',
        700: '#05192b',
        750: '#041727',
        800: '#041423',
        850: '#03121f',
        900: '#03101b',
        950: '#020d17'
    }
}

const theme = extendTheme({
    config, styles, components, colors, fonts
})

export default theme