'use-client'
import Nav from '@/component/nav/Nav'
import US from '@/component/uppserSideSection/US'
import Sample from '@/component/middle/Sample'
import land from '@/assets/lottie/land.json'
import Lottie from "lottie-react"
import useAuth from '@/hook/useAuth'
import { motion } from 'framer-motion'
import Examp from '@/component/example/Examp'
import { useEffect ,useState} from 'react'
import { check } from '@/manager/API'
import { NextResponse } from 'next/server'
import useRouter from "next/router"

export default function IndexPages() {
  const router = useRouter;

  const {userDispatch,exists,userId} = useAuth();
  const [ii,setii] = useState('')
  const [rend,setRend] = useState(false)
  useEffect(()=>{
    const a = (async()=>{
  const i = localStorage.getItem('userId');

      await check(i,userDispatch);
      setii(i)
      setRend(true)
    })
    a()
  },[])
  

  if(rend){
    if(exists){
      router.push('/users/'+ii);
    }else{
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
        <div  className='lottie'>
        <Lottie animationData={land} loop={true}  
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
  }else{
    return(
      <h1>Loading</h1>
    )
  }



}
