import React from 'react'
import Textspan from '../Textspan'
import { motion } from 'framer-motion'
function US() {
  const sent = "ESION".split("")
  return (
    <motion.div className='Usection'
 
    >
    {sent.map((el,i)=>{
      return (
        <Textspan key={i} child={el} />
      )
    })}
    <p>No matter if you need to concentrate,block out background noise, or just need a moment to unwind and unwind,
    ESION is your little assistant and companion, for you to keep concentrating
    </p>
    </motion.div>

  )
}
export default US