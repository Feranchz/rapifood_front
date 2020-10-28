import type { AppProps } from 'next/app'
import '../styles/tailwind.css'
import { Navbar } from "../components/Navbar"

function MyApp({ Component, pageProps }: AppProps){
  return (
    <>
      <Navbar />
      <div className="pt-16 lg:pt-0">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp