import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Container, useColorMode } from '@chakra-ui/react'

import useGlobal from '../hooks/useGlobal'
import AppLayout from '../layouts/AppLayout'
import { DiscoverList } from '../collections/DiscoverList'
import { TrendingList } from '../collections/TrendingList'

export default function Index({ market }) {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  const [state, actions] = useGlobal(['items'])

  return (
    <AppLayout>
      <Container maxW="container.xl" pt={10}>
        <TrendingList items={state.items || []} />
        <DiscoverList
          items={state.items || []}
          onLoadMore={actions.addItems}
          />
      </Container>
    </AppLayout>
  )
}
