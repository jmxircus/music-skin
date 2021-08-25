import { Fragment, useState, useEffect, useCallback } from 'react'
import {
  Box, Spacer, Button, Avatar,
  Menu, MenuButton, MenuList, MenuItem,
  useToast
} from '@chakra-ui/react'
import { useWallet } from 'use-wallet'

import useGlobal from '../../../pages/hooks/useGlobal'

import { AppHeader, AppBrand, AppSpacer, ConnectWallet } from '../components/Header'
import { CopyAddress } from '../components/Copy'

const AppLayout = ({ children }) => {
  const wallet = useWallet()
  const [account, setAccount] = useState({ balance: 0, currency: 'XMT' })
  const [state, actions] = useGlobal(['user'])
  const toast = useToast()

  useEffect(() => {
    if (wallet.status == 'connected') {
      login()
    }

    if (wallet.status == 'error') {
      try {
        toast({
          title: 'Wallet Failed',
          description: wallet.error?.name == 'ChainUnsupportedError'
            ? `Switch to ${state.network?.name}`
            : wallet.error?.message,
          status: 'error'
        })
      } catch (e) {
      }
    }
  }, [wallet.status])

  const login = async() => await actions.login(wallet)
  const logout = async() => await actions.logout(wallet)

  const renderConnectWallet = useCallback(() =>
    wallet.status == 'connected'
    ? (
      <Menu>
        <MenuButton
          rightIcon={<Avatar boxSize="38px" ml={4} />}
          as={Button} mb={6} variant="outline" borderRadius="full" pr={0}>
          {account.balance} <strong>{account.currency}</strong>
        </MenuButton>
        <MenuList>
          <Box p={3}>
            <CopyAddress address={wallet.account} />
          </Box>
          <MenuItem>Edit Profile</MenuItem>
          <MenuItem>My Items</MenuItem>
          <MenuItem>My Collections</MenuItem>
          <MenuItem onClick={logout}>Disconnect</MenuItem>
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
          <MenuItem
            onClick={() => wallet.connect('walletconnect')}>
            WalletConnect
          </MenuItem>
        </MenuList>
      </Menu>
    ), [wallet])

  return (
    <Box>
      <AppHeader>
        <AppBrand />
        <Spacer />
        { renderConnectWallet() }
      </AppHeader>
      <AppSpacer />
      { children }
    </Box>
  )
}

export default AppLayout
