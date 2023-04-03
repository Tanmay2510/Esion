import {BsFillCloudRainFill,BsCloudSnow,BsFire,BsWater} from 'react-icons/bs'
import {RiWindyFill} from 'react-icons/ri'
import {FaSnowboarding} from 'react-icons/fa'
import {MdForest} from 'react-icons/md'
import {GiMountains,GiPlantWatering,GiNightSky}  from 'react-icons/gi'
import {FaRoad} from 'react-icons/fa'
import {TbBeach} from 'react-icons/tb'
import { notSampledata } from '@/util/SData'

function soundIcon() {
  return (
    <div>
     <BsFillCloudRainFill size={70}/>
    <BsWater/><TbBeach/>
    <FaRoad/><GiPlantWatering/>
     <GiNightSky/><BsFire /><GiMountains/>
     <BsCloudSnow/><RiWindyFill /><MdForest/><FaSnowboarding/>
    </div>
  )
}

export default soundIcon