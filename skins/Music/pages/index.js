import { Box, useColorMode } from "@chakra-ui/react"
import { useTranslations } from "next-intl"
import { useRouter } from "next/router"
import { useEffect } from "react"
import ArtistList from "../collections/ArtistList"
import GenresList from "../collections/GenresList"
import TracksList from "../collections/TracksList"
import SearchBanner from "../components/SearchBanner"
import VideoBackground from "../components/VideoBackground"
import useGlobal from "../hooks/useGlobal"
import AppLayout from "../layouts/AppLayout"

export default function Index({ market }) {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()
  const [state, actions] = useGlobal(["username"])
  const t = useTranslations("index")

  useEffect(() => {
    router.prefetch("/about")
  }, [])

  return (
    <AppLayout>

      <SearchBanner />
      <TracksList />
      <TracksList title="Trending Tracks" />
      <ArtistList />
      <GenresList />

    </AppLayout>
  )
}
