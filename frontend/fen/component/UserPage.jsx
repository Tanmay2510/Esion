import Reglog from '@/component/Form/Reglog'
import Nav from '@/component/nav/Nav';
import useAuth from '@/hook/useAuth';
import { check } from '@/manager/API';
import React, { useEffect, useState } from 'react'
import useRouter from "next/router"

export default function UserPage() {
const router = useRouter;

  const {userDispatch,exists} = useAuth();
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
      <div className='allCont'>
      <Nav where ="form" />
      <div className="userCont">
       <Reglog />
      </div>
      <h3 style={{marginBottom:0,textAlign:"center"}} >Made with &#10084; by Tanmay</h3>
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
