import { Inter } from 'next/font/google'
import Nav from '@/component/nav/Nav'
import US from '@/component/uppserSideSection/US'
import Sample from '@/component/middle/Sample'
import land from '@/assets/lottie/land.json'
import Lottie from "lottie-react"
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
    <div className='Whole'>
    <div className='UpperSection'>
    <Nav />
    <div className='UnderNavCont'>
    <US />
    <Lottie animationData={land} loop={true}  className='lottie'
    autoPlay
/>
    </div>
    </div>
    <div className='bottomSection'>
    <Sample />
    
    </div>
    
    </div>      
    </>
  )
}
