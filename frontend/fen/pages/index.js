import { Inter } from 'next/font/google'
import Nav from '@/component/nav/Nav'
import US from '@/component/uppserSideSection/US'
import Reglog from '../component/Form/Reglog'
import Sample from '@/component/middle/Sample'


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
    <Sample />
    </div>
    </div>      
    </>
  )
}
