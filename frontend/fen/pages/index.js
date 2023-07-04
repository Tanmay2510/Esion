import { Inter } from 'next/font/google'
import Nav from '@/component/nav/Nav'
import US from '@/component/uppserSideSection/US'
import Sample from '@/component/middle/Sample'
import land from '@/assets/lottie/land.json'
import Lottie from "lottie-react"
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const {ref,inView} = useInView({
    threshold:0.7
  })
  const animation = useAnimation()

  useEffect(()=>{
    if(inView){
      animation.start({
        x:0,
        transition:{
          type:"spring",duration:1,bounce:0.3
        }
      })
     
    }
    if(!inView){
      animation.start({
        x:"-100vw"
      })
    }

  },[inView])
  return (
    <>
    <div className='Whole'>
    <div className='UpperSection'>
    <Nav />
    <div
    ref={ref}
    
    className='UnderNavCont'>
    <motion.div
    animate={animation}
    >
    <US />
    </motion.div>

    <Lottie animationData={land} loop={true}  className='lottie'
    autoPlay
/>
    </div>

    </div>
    <div style={{height:"500px"}}>
    </div>
    <div className='bottomSection'>
    <Sample />
    
    </div>
    
    </div>      
    </>
  )
}
