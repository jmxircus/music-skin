import { useRouter } from 'next/router'
import Button from '../components/Button'
import useGlobal from '../hooks/useGlobal'
import Link from 'next/link'
import AppLayout from '../layouts/AppLayout'

export default function Index({ market }) {
  const router = useRouter()
  const [state, actions] = useGlobal(['username'])

  console.log("ROUTER", router)

  return (
    <AppLayout>
      <h1>{market.subdomain}</h1>
      <Button />
      <Link href="/"><a>Home</a></Link>
    </AppLayout>
  )
}
