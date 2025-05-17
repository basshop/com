// pages/_app.tsx
import '../styles/globals.css'
import '../styles/service.css'
import '../styles/team.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp