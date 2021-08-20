import { HStack, Text, useColorModeValue } from "@chakra-ui/react";
import Image from 'next/image';
import LogoLight from '../public/logolight.jpg';
import LogoDark from '../public/logodark.jpg';

const Logo = () => {
  // const imgSrc = useColorModeValue("/logolight.jpg","/logodark.jpg");
  const imgSrc = useColorModeValue(LogoLight,LogoDark);
  const txtColor = useColorModeValue("black","white");

  return <HStack >
    <Image src={imgSrc} alt="MM" width="50" height="50"  />
    <Text fontWeight="semibold" color={txtColor} ml="1">Musicmakes</Text>
  </HStack>;

}

export default Logo;