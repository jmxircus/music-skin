import { Fragment } from 'react'
import {
  Box, HStack, Container, Img, Button, Spacer, Heading,
  Menu, MenuButton, MenuList, MenuItem,
  useColorModeValue
} from '@chakra-ui/react'


export const AppHeader = ({ children }) => (
  <Box bg={useColorModeValue('gray.50', 'gray.900')} py={4} pos="fixed" w="full">
    <Container maxW="full">
      <HStack>
        {children}
      </HStack>
    </Container>
  </Box>
)

export const AppSpacer = () => <Box h="72px" />

export const AppBrand = ({ logo, title = 'AppName' }) => (
  <HStack w="full">
    { logo ? <Img src={logo} w="50px" /> : <Heading size="md">{title}</Heading> }
    <Spacer />
    <Button display={{ base: 'inline-block', md: 'none' }}>Menu</Button>
  </HStack>
)

export const ConnectWallet = ({ balance = 0, currency = 'XMT', wallet, onDisconnect }) => (
  <Fragment>
    {
      (wallet.status === 'connected' && wallet.account)
      ? (
        <Menu>
          <MenuButton as={Button} mb={6} variant="outline" borderRadius="full" >
            {balance} <strong>{currency}</strong>
          </MenuButton>
          <MenuList>
            <Box>{wallet.account}</Box>
            <MenuItem>Edit Profile</MenuItem>
            <MenuItem>My Items</MenuItem>
            <MenuItem>My Collections</MenuItem>
            <MenuItem onClick={onDisconnect}>Disconnect</MenuItem>
          </MenuList>
        </Menu>
      )
      : (
        <Menu>
          <MenuButton
            display={{ base: 'none', md: 'inline-block' }}
            as={Button} mb={6} variant="outline"
            borderRadius="full" minW="160px">
            Connect Wallet
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => wallet.connect()}>Metamask</MenuItem>
            <MenuItem onClick={() => wallet.connect('walletconnect')}>WalletConnect</MenuItem>
          </MenuList>
        </Menu>
      )
    }
  </Fragment>
)
