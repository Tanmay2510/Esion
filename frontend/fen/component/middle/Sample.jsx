import { data } from '@/util/SData'
import React from 'react'


function Sample() {
 
  return (
    <div className='middleSection'>
    {
      data.map((el,i)=>{
        return (
          <div onClick={()=>{
            var audio = new Audio(el.uri);
            audio.play();
          }}>
            {el.logo}
          </div>
        )
      })
    }
    </div>
  )
}
export default Sample