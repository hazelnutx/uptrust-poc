import '../../styles/globals.css'
import 'tailwindcss/tailwind.css'
import DefaultLayout from '../layout/DefaultLayout'

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
