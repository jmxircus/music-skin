import { Grid, Box } from "@chakra-ui/react"
import Head from 'next/head'
import Menu from '../components/Menu'

const Settings = () => (<>
<Head><title>Settings | MusicMakes</title></Head>
<Grid templateColumns={{base:"auto",md:"250px auto 250px"}} templateRows={{base:"100px auto 100px", md:"1fr"}} h="100vh">
  <Box>
    <Menu />
  </Box>
  <Box bg="blue.500"></Box>
  <Box bg="red.500"></Box>
</Grid></>)

export default Settings