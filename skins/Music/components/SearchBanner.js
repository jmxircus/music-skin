import { Box, Button, Heading, Icon, Input, InputGroup, InputLeftElement, InputRightElement, Menu, MenuButton, MenuItem, MenuList, VStack } from '@chakra-ui/react'
import { TiArrowSortedDown } from 'react-icons/ti'
import { IoSearchOutline } from 'react-icons/io5'
import useGlobal from '../hooks/useGlobal'

export default function SearchBanner() {
  const [state, actions] = useGlobal(['categories'])

  return <VStack h={{ base: 'xs', md: 'xl' }} w="full" px="2" justifyContent="center" alignItems="flex-start" spacing="8" bgImage="url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" bgSize="cover" bgPos="center">
    <Heading as="h1" fontSize={{ base: '2xl', md: '5xl' }} textTransform="uppercase" w={{ base: 'full', md: '3xl' }}>The World's #1 Marketplace to buy &amp; sell beats</Heading>


    <InputGroup bgColor="whiteAlpha.400" boxShadow="2xl" color="black" borderRadius="lg" display={{ base: 'none', md: 'block' }} w={{ base: 'full', md: 'lg' }} size="lg">
      <InputLeftElement pointerEvents="none">
        <Icon as={IoSearchOutline} />
      </InputLeftElement>
      <Input color="black" type="text" fontSize="sm" placeholder='Try "Word One" or "Beat Trims"' />
      <InputRightElement w="min-content">
        <Menu matchWidth aria-label="Category" >
          <MenuButton
            as={Button}
            bg="transparent"
            rightIcon={<TiArrowSortedDown />}
            fontSize="xs"
            border="none"
            outline="none"
            _active={{ bg: "transparent" }}
            _focus={{ outline: "none", bg: "transparent" }}
            _hover={{ outline: "none", bg: "transparent" }}
          >
            All
          </MenuButton>
          <MenuList>
            {(state.categories || []).map((item, index) => (
              <MenuItem color="white" fontSize="sm" key={index}>{item}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </InputRightElement>
    </InputGroup>

    <Box as="p">
      Trending:
    </Box>
  </VStack>

}
