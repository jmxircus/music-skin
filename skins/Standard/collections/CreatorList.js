import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Grid, Heading, Box, Img, Button,
  useColorModeValue
} from '@chakra-ui/react'

export const DiscoverCard = ({ name, description, url, collection, nftId, publicUrl }) => (
  <Link href={`/nft/${collection}:${nftId}`}>
    <Box bg={useColorModeValue('gray.50', 'gray.900')} minH="300px" border="1" borderRadius="md" overflow="hidden">
      <Img src={`https://ipfs.infura.io:5001/api/v0/cat/${publicUrl}`} />
      <Box p={4}>
        <Heading size="sm">{name}</Heading>
      </Box>
    </Box>
  </Link>
)

export const DiscoverList = ({ items = [], onLoadMore, ...rest }) => (
  <Box>
    <Grid templateColumns={{ base: 'auto', md: 'repeat(4, 1fr)' }} gap={6}>
      { (items || []).map((item, itemKey) => <DiscoverCard key={itemKey} {...item} />) }
    </Grid>
    <Box py={10}>
      <Button onClick={onLoadMore} isFullWidth variant="outline">Load More</Button>
    </Box>
  </Box>
)
