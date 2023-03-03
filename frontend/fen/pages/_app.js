import UserStore from '@/context/userContext'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App({ Component, pageProps }) {
  return(
  <UserStore>
  <Component {...pageProps} />
  </UserStore>
  )

}
