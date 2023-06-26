import UserStore from '@/context/userContext'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App({ Component, pageProps }) {
  return(
  <UserStore>
  <Component {...pageProps} />
  </UserStore>
  )

}
