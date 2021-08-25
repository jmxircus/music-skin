import { AspectRatio, Box } from "@chakra-ui/react"

const VideoBackground = ({ videoSrc = "https://www.beatstars.com/assets/videos/beatstars-home.mp4" }) => (
  <Box
    pos="absolute"
    left="0"
    right="0"
    pointerEvents="none"
    h={{ base: "50vh", md: "100vh" }}
    zIndex="-1"
    boxShadow="dark-lg"
  >
    <AspectRatio maxW="100vw" h="100%" ratio={"16/9"}>
      <video playsInline autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </AspectRatio>
  </Box>
)

export default VideoBackground
