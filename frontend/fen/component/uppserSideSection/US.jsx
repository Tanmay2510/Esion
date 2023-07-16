import React from 'react'
import Textspan from '../Textspan'
import { motion } from 'framer-motion'
function US() {
  // const sent = "Stuck at a noisy place?".split("")
  return (
    <motion.div className='Usection'
 
    >
    {
    //   sent.map((letter,i)=>{
    //   console.log(letter)
    //   return (
    //     <Textspan key={i}>
    //       {letter === " " ? " " : letter}
    //     </Textspan>
    //   )
    // })
  }
    <h1>Stuck at a noisy place?</h1>
    <hr ></hr>
    <h2  className='secondLine'>Work, Concentrate or Relax</h2>
    <p>Esion will easily help you out to cancel out all the unwanted noise and help you concentrate, chill and relax at your own combinatioin of soothing sounds
    </p>
    </motion.div>

  )
}
export default US