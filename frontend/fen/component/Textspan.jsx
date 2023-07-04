import { color, motion , transform, useAnimationControls} from 'framer-motion'
import React, { useState } from 'react'
function Textspan({child}) {
    const ctrl = useAnimationControls()
    const[ispl,setispl] = useState(false)
    const rubberBand = ()=>{
        ctrl.start({
            transform:
            [
                "scale(1,1)",
                "scale(1.4,.55)",
                "scale(.75,1.25)",
                "scale(1.25,.85)",
                "scale(.9,1.05)",
                "scale(1,1)",

            ],
            
            
        })
        setispl(true)

    }
  return (
    <motion.span
    className='sp'
    onMouseOver={()=>
        {

        if(!ispl){
            rubberBand()

        }
    }

    }
    onAnimationComplete={()=>setispl(false)}
    animate={ctrl}
    >{child}</motion.span>
  )
}

export default Textspan