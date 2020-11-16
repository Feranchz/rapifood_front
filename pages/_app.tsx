import type { AppProps } from 'next/app'
import { Navbar } from '../components/Navbar'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps){
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp