import { useState, useEffect } from 'react'
import Link from 'next/link'
import Slider from 'react-slick'
import {
  Grid, Heading, Box, Img, Button, HStack,
  useColorModeValue
} from '@chakra-ui/react'

const trendingCardStyle = {
  m: 1,
  p: 2,
  transition: 'all 300ms ease',
  cursor: 'pointer',
  overflow: 'hidden',
  borderWidth: 1,
  borderRadius: 'md',
  _hover: {
    bg: 'gray.500'
  }
}


export const TrendingCard = ({ name, description, url, collection, nftId, publicUrl }) => (
  <Box bg={useColorModeValue('gray.50', 'gray.900')} {...trendingCardStyle}>
    <Img src={`https://ipfs.infura.io:5001/api/v0/cat/${publicUrl}`} />
    <Box p={4}>
      <Heading size="sm">{name}</Heading>
    </Box>
  </Box>
)

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
  ]
}

export const TrendingList = ({ items = [], onLoadMore, ...rest }) => (
  <Box>
    <HStack mb={4}>
      <Heading>Trending 🔥</Heading>
    </HStack>
    <Box mb={10}>
      <Slider {...settings}>
        { (items || []).map((item, itemKey) => <TrendingCard key={itemKey} {...item} />) }
      </Slider>
    </Box>
  </Box>
)
