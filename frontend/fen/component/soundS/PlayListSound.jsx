import { notSampledata } from '@/util/SData'
import React from 'react'

function PlayListSound({nam,dat}) {
 console.log(nam)
 console.log(dat)
  return (
    <div>
    <div className="cardSection" >
    <h4 align="center" style={{margin:"15px",color:"white"}}>{nam}</h4>
    <div className='audioControls'>
    <input
    min={0}
    max={100}
    // onChange={(e) => handleVolume(e)} 
    type="range"
    ></input>

        <button>Play</button>
    
</div>
    </div>
    </div>
  )
}

export default PlayListSound