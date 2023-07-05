import { Inter } from 'next/font/google'
import Nav from '@/component/nav/Nav'
import US from '@/component/uppserSideSection/US'
import Sample from '@/component/middle/Sample'
import land from '@/assets/lottie/land.json'
import Lottie from "lottie-react"
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import Examp from '@/component/example/Examp'
const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const {ref,inView} = useInView({
    threshold:0.2
  })
  const animation = useAnimation()

  useEffect(()=>{
    if(inView){
      animation.start({
        x:0,
        transition:{
          type:"spring",duration:1,bounce:0.1,
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
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.5}}
    className='UnderNavCont'>
    <US />
    <Lottie animationData={land} loop={true}  className='lottie'
    autoPlay/>
    </motion.div>
    </div>
    <div className='someshit'
      ref = {ref}
    >
    <motion.div animate={animation}>
      <Examp />
    </motion.div>

    </div>
    <div className='bottomSection'>
    <Sample />
    
    </div>
    
    </div>      
    </>
  )
}
