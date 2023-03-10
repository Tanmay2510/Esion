import { Racing_Sans_One } from 'next/font/google'
import React from 'react'
import { BsCloudSnow, BsFire } from 'react-icons/bs'
import { MdForest } from 'react-icons/md'
import rain from "../../assets/sounds/rain.mp3"
function Sample() {
  
  const play = () => {
    var audio = new Audio(rain);
    audio.play();
  }
  return (
    <div className='middleSection'>
    <BsFire size = {70} />
    <BsCloudSnow  size = {70} />
    <MdForest size = {70}  onClick={play}/>
    </div>
  )
}
export default Sample