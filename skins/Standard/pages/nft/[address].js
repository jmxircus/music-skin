import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box, Spinner, Heading, Button } from '@chakra-ui/react'
import useGlobal from '../../hooks/useGlobal'

export default function ItemInfo() {
  const [state, actions] = useGlobal(['items'])
  const [item, setItem] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (router.query.address) {
      const [collection, nftId] = router.query.address.split(':')
      setItem(state.items.find(item => item.collection == collection))
    }
  }, [router.isReady])

  if (item) {
    return (
      <Box>
        <Button size="sm" onClick={() => router.push('/discover')}>Back</Button>
        <Heading>{item.name}</Heading>
      </Box>
    )
  }

  return <Spinner />
}
