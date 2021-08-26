import { Badge, Box, Heading, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import Slider from 'react-slick'
import { IoIosArrowDropleft, IoIosArrowDropright, IoIosPlayCircle } from 'react-icons/io'
import { IoMusicalNote, IoShieldCheckmarkSharp } from 'react-icons/io5'
import { useRef } from 'react'
import Link from 'next/link'

const mockData = { thumbnail: 'https://www.beatstars.com/assets/img/genres/rb.jpg', title: 'R&B' }

const mockItems = Array.from({ length: 12 }, (value, key) => mockData)

const setting = {
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

export default function GenresList({ title = 'Popular Genres', titleStyle = {}, sliderItems = mockItems }) {
  const sliderRef = useRef();

  return (
    <Box mb={{ base: '5', md: '10' }}>
      <HStack justifyContent="space-between" mb="2">
        <Heading mx="2" as="h1" size="md" {...titleStyle}>
          {title}
        </Heading>
        <Box>
          <Icon as={IoIosArrowDropleft} boxSize="6" _hover={{ cursor: 'pointer' }} onClick={() => sliderRef.current?.slickPrev()} />
          <Icon as={IoIosArrowDropright} boxSize="6" _hover={{ cursor: 'pointer' }} onClick={() => sliderRef.current?.slickNext()} />
        </Box>
      </HStack>
      <Slider {...setting} ref={s => sliderRef.current = s}>
        {(sliderItems || []).map((item, indx) => <Card key={indx} {...item} />)}
      </Slider>
    </Box>
  )
}

const Card = ({ thumbnail, title }) => (<VStack alignItems="center" m="2" spacing="0">
  <Box cursor="pointer" bgImg={`url(${thumbnail})`} bgRepeat="no-repeat" bgSize="cover" bgPos="center" boxSize="3xs" borderRadius="md" overflow="hidden"><Box boxSize="full" opacity="0" bg="blackAlpha.500" _hover={{ opacity: 1 }} /></Box>
  <HStack pt="2" w="full">
    <Heading as="h1" size="sm" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
      <Link href="#">{title}</Link>
    </Heading>
  </HStack>
</VStack>)
