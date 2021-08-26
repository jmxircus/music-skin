import { Box, Button, Spacer } from "@chakra-ui/react"
import { AppBrand, AppHeader, AppSpacer } from "../components/Header"
import useGlobal from "../hooks/useGlobal"

const AppLayout = ({ children }) => {
  const [state, actions] = useGlobal(["user"])

  return (
    <Box>
      <AppHeader>
        <AppBrand />
        <Spacer display={{ base: "none", md: "flex" }} />
        <Button display={{ base: "none", md: "flex" }}>Connect Wallet</Button>
      </AppHeader>
      <AppSpacer />
      {children}
    </Box>
  )
}

export default AppLayout
