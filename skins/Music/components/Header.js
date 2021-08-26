import {
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  HStack,
  Icon,
  IconButton,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import Link from "next/link"
import React from "react"
import { HiMenuAlt3 } from "react-icons/hi"
import { IoSearchOutline } from "react-icons/io5"
import { TiArrowSortedDown } from "react-icons/ti"
import useGlobal from "../hooks/useGlobal"

export const AppHeader = ({ children }) => (
  <Box
    bg={useColorModeValue("gray.50", "gray.900")}
    pt={4}
    pb={{ base: 2, md: 0 }}
    pos="fixed"
    w="full"
    boxShadow="dark-lg"
    zIndex="999"
  >
    <Container maxW="full">
      <HStack>{children}</HStack>
      <MainNavigation />
      <SearchBar display={{ base: "block", md: "none" }} maxW="full" />
    </Container>
  </Box>
)

export const AppSpacer = () => <Box h={["120px", "100px"]} />

export const AppBrand = ({ logo, title = "Xircus" }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <HStack w="full" pb="2">
        {logo ? <Img src={logo} w="50px" /> : <Heading size="md">{title}</Heading>}
        <SearchBar display={{ base: "none", md: "inline-block" }} maxW="lg" />
        <Spacer />
        <IconButton
          onClick={onOpen}
          aria-label="Menu"
          variant="ghost"
          textAlign="end"
          icon={<Icon w="30px" h="30px" as={HiMenuAlt3} />}
          display={{ base: "inline-block", md: "none" }}
          bg="transparent"
          _focus={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
        />
      </HStack>
      <DrawerMenu isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </>
  )
}


export const SearchBar = (props) => {
  const [state, actions] = useGlobal(['categories'])

  return (<InputGroup borderRadius="lg" {...props}>
    <InputLeftElement pointerEvents="none">
      <Icon as={IoSearchOutline} />
    </InputLeftElement>
    <Input type="text" fontSize="sm" placeholder="Looking something..." />
    <InputRightElement w="min-content">
      <Menu matchWidth aria-label="Category">
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
            <MenuItem key={index}>{item}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </InputRightElement>
  </InputGroup>)
}

const menus = ["Discover", "Artists", "Tracks", "Genres", "Subscription", "About"]
const NavigationLinks = ({ navItems = menus, forceColumn }) => (
  <Stack as="nav" direction={["column", forceColumn ? "column" : "row"]} spacing="5">
    {(navItems || []).map((item, index) => (
      <Link key={index} href={`/${item}`}>
        <Box
          as="p"
          pb={["0", "2"]}
          cursor="pointer"
          _hover={[{ borderLeft: "none" }, { borderBottom: "1px solid white" }]}
        >
          {item}
        </Box>
      </Link>
    ))}
  </Stack>
)
export const MainNavigation = ({ navItems = menus }) => (
  <Box display={{ base: "none", md: "block" }}>
    <NavigationLinks />
  </Box>
)

export const DrawerMenu = ({ isOpen, onOpen, onClose }) => (
  <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <Box h="2rem" />
      <DrawerBody>
        <Button>Connect Wallet</Button>
        <NavigationLinks forceColumn />
      </DrawerBody>
    </DrawerContent>
  </Drawer>
)
