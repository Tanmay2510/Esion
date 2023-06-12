import React, { useState , useRef , useEffect} from 'react'

function PlayListSound({nam,dat,keyy, handle}) {
  console.log(handle)
 const MAX = 20;
 const audioRef = useRef(null)
 const [play,setplay] = useState(null);
 const handleClickKey = (i) =>()=>{
 }
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

        <button onClick={handleClickKey(keyy)}>Play</button>
    
</div>
    </div>
    </div>
  )
}

export default PlayListSound