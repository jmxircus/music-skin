import { Box, HStack, VStack, Icon, Text, Heading, Avatar } from "@chakra-ui/react";
import { RiHeart2Fill } from "react-icons/ri";

const glassmorphismStyle = {
  bg: "rgba(255,255,255,0.30)",
  boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37 )",
  backdropFilter: "blur(10.0px)",
  // webkitBackdropFilter: "blur(10px)", // not recognize
};

const ShowcaseCard = ({ title, creator, thumbnail, price, avatar }) => (
  <Box
    w="full"
    h="200px"
    bgColor="black"
    borderRadius="md"
    padding={4}
    color="white"
    bgImage={thumbnail}
    bgPos="center"
    bgRepeat="no-repeat"
    bgSize="cover"
    overflow="hidden"
  >
    <VStack alignItems="stretch" justifyContent="space-between" h="100%">
      <Box textAlign="end">
        <Box display="inline" {...glassmorphismStyle} w="-webkit-fit-content" p="1" borderRadius="lg">
          <Icon as={RiHeart2Fill} w={5} h={5} />
        </Box>
      </Box>
      <HStack
        alignItems="center"
        alignContent="center"
        justifyContent="start"
        padding={2}
        {...glassmorphismStyle}
        border="1px solid rgba(255,255,255,0.18 )"
        borderRadius="md"
      >
        <Box flex="1" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
          <Heading as="h1" size="xs">
            {title}
          </Heading>
          <Text fontSize="10px">
            Current Price{" "}
            <Text as="span" fontSize="xs" color="pink.500" fontWeight="bold">
              {price} ETH
            </Text>
          </Text>
        </Box>
        <Box>
          <Avatar size="xs" name={creator} src={avatar} />
        </Box>
      </HStack>
    </VStack>
  </Box>
);

export default ShowcaseCard;
