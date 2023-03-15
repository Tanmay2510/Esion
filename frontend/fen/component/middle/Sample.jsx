import { data } from '@/util/SData'
import React, { useState } from 'react'
import {BsPauseFill} from 'react-icons/bs'
function Sample() {
  const [isplay,setisplay] = useState(false);
 
  return (
    <div className='middleSection'>
    {
      data.map((el,i)=>{
        return (
          <div
          className='middleSample'
          onClick={()=>{
            setisplay(!isplay)
            var audio = new Audio(el.uri);
            if(isplay){
            audio.play();
            }
          }}>
            {el.logo}
            <div>
            {
              isplay ? 
              <BsPauseFill/>
              :null
            }
            </div>

          </div>
        )
      })
    }
    </div>
  )
}
export default Sample