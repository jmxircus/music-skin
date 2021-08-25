import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

export default function CreatorProfile() {
  const router = useRouter()
  const t = useTranslations('creators:address')

  return (
    <Box>
      { t('title') }
    </Box>
  )
}
