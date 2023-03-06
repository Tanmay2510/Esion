import { Inter } from 'next/font/google'
import Nav from '@/component/nav/Nav'
import US from '@/component/uppserSideSection/US'
import Reglog from '../component/Form/Reglog'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='Whole'>
    <div className='UpperSection'>
    <Nav />
    <div className='UnderNavCont'>
    <US />
    <Reglog />
    </div>
    </div>
    <div className='bottomSection'>
    <h1>h</h1>

    </div>
    </div>      
    </>
  )
}
