import { useState, useEffect, useMemo } from "react"
import dynamic from "next/dynamic"
import { UseWalletProvider, ConnectionRejectedError, useWallet } from "use-wallet"
import { ChakraProvider, Spinner, extendTheme } from "@chakra-ui/react"
import { NextIntlProvider } from "next-intl"
import useGlobal from "./hooks/useGlobal"
import "slick-carousel/slick/slick.css"

export default function XircusApp({ Component, pageProps, router }) {
  const [market, setMarket] = useState(false)
  const [state, actions] = useGlobal(["network"])

  useEffect(() => {
    if (window.location.hostname) {
      loadMarketPlace()
    }
  }, [global.window])

  const loadMarketPlace = async () => {
    const subdomain = window.location.hostname.split(".")[0]
    const reply = await fetch(`https://api.xircus.app/marketplace/${subdomain}`)
    const res = await reply.json()
    if (res.status) {
      setMarket({ ...res.marketplace, layout: res.marketplace.networks[0].layout })
    }
  }

  Component = require(`../skins/Music/pages${router.route}`).default
  const theme = extendTheme(require(`../skins/Music/theme`).theme)
  const messages = require(`../skins/Music/i18n/${router.locale}.json`)

  return (
    <UseWalletProvider {...actions.getWalletConfig()}>
      <NextIntlProvider messages={messages}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} market={market} />
        </ChakraProvider>
      </NextIntlProvider>
    </UseWalletProvider>
  )
}

// Component = dynamic(() =>
//   import(`../skins/${market.layout || 'Standard'}/pages${router.route}`),
//   {
//     ssr: false,
//     loading: () => <Spinner color="red.500" m={4} />
//   }
// )
