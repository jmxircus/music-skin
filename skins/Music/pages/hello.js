import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Button from '../components/Button'
import useGlobal from '../hooks/useGlobal'
import Link from 'next/link'
import AppLayout from '../layouts/AppLayout'
import { useColorMode } from '@chakra-ui/react'

export default function Index({ market }) {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  const [state, actions] = useGlobal(['username'])

  useEffect(() => {
    router.prefetch('/about')
  }, [])

  const handleAlert = () => {
    alert("TEST")
  }

  console.log("ROUTER", router)

  return (
    <div>
      <h1>Hallert Window</h1>
      <button onClick={toggleColorMode}>{colorMode}</button>
      <Link href="/about"><a>About</a></Link>
    </div>
  )
}
