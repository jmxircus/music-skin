import Logo from "./Logo";
import Link from "next/link";
import { Text, VStack, Box, Icon, HStack, useColorModeValue } from "@chakra-ui/react";
import { TiHomeOutline } from "react-icons/ti";
import { IoSettingsOutline, IoWalletOutline, IoFileTrayStackedOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { RiHeart2Line } from "react-icons/ri";
import { AiOutlineLineChart } from "react-icons/ai";
import { useRouter } from "next/dist/client/router";

const menus = [
  { url: "/dashboard", icon: TiHomeOutline, txt: "Market" },
  { url: "/bid", icon: AiOutlineLineChart, txt: "Active Bid" },
  { url: "/fav", icon: RiHeart2Line, txt: "Saved" },
];

const accountmenus = [
  { url: "/collection", icon: IoFileTrayStackedOutline, txt: "My Collection" },
  { url: "/wallet", icon: IoWalletOutline, txt: "Wallet" },
  { url: "/history", icon: BsClock, txt: "History" },
  { url: "/settings", icon: IoSettingsOutline, txt: "Settings" },
];

const Menu = () => {
  const router = useRouter();
  const menuTxtColor = useColorModeValue("grey", "white");

  console.log(router.pathname);

  return (
    <Box>
      <Logo />

      <Text pl="5" fontSize="10px" letterSpacing="wide" fontWeight="bold" color="pink.500" mb="3" mt="5">
        MARKETPLACE
      </Text>
      <VStack align="stretch">
        {menus.map((item) => (
          <LinkGenerator
            key={item.url}
            url={item.url}
            icon={item.icon}
            txt={item.txt}
            txtColor={menuTxtColor}
            active={item.url == router.pathname}
          />
        ))}
      </VStack>

      <Text pl="5" fontSize="10px" letterSpacing="wide" fontWeight="bold" color="pink.500" mb="3" mt="5">
        ACCOUNT
      </Text>
      <VStack align="stretch">
        {accountmenus.map((item) => (
          <LinkGenerator
            key={item.url}
            url={item.url}
            icon={item.icon}
            txt={item.txt}
            txtColor={menuTxtColor}
            active={item.url == router.pathname}
          />
        ))}
      </VStack>
    </Box>
  );
};

const activeLinkBorder = {
  content: '""',
  position: "absolute",
  left: 0,
  top: 0,
  borderLeftColor: "pink.500",
  borderLeftWidth: "3px",
  h: "50px",
  w: "50px",
};

const activeLinkStyle = {
  color: "blue.900",
  fontWeight: "bold",
};

const LinkGenerator = ({ url, icon, txt, txtColor, active }) => {
  const activeTextStyle = active && activeLinkStyle;
  const activeBorderStyle = active && activeLinkBorder;

  return (
    <Link href={url}>
      <a>
        <HStack pl="5" py="2" pos="relative" overflow="hidden" _before={activeBorderStyle}>
          <Icon boxSize="5" as={icon} color={active ? "pink.500" : txtColor} />
          <Text fontSize="sm" color={active ? "blue.900" : txtColor} {...activeTextStyle}>
            {txt}
          </Text>
        </HStack>
      </a>
    </Link>
  );
};

export default Menu;
