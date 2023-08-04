import { Inter } from 'next/font/google'
import IndexPages from '@/component/IndexPages'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
    <IndexPages />
    </>
  )
}
