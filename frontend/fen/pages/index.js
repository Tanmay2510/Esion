import { Inter } from 'next/font/google'
import Nav from '@/component/nav/Nav'
import US from '@/component/uppserSideSection/US'
import Sample from '@/component/middle/Sample'
import land from '@/assets/lottie/land.json'
import Lottie from "lottie-react"

import { motion } from 'framer-motion'
import Examp from '@/component/example/Examp'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {

  return (
    <>
    <div className='Whole'>
    <div className='UpperSection'>
    <Nav />
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}
    className='UnderNavCont'>
    <US />
    <div width="45vw">
    <Lottie animationData={land} loop={true}  className='lottie'
    autoPlay/>
    </div>

    </motion.div>
    </div>
    <div className='someshit'
    >
      <Examp />

    </div>
    <div className='bottomSection'>
    <Sample />
    
    </div>
    
    </div>      
    </>
  )
}
