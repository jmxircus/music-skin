import {extendTheme} from '@chakra-ui/react'

const config = {
  initialColorMode:"light",
  useSystemColorMode: true,
  fonts: {body:"Open Sans"}
}

const theme = extendTheme({config})

export default theme