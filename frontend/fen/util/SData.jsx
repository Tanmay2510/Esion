import rain from "../assets/sounds/rain.mp3"
import stream from "../assets/sounds/stream.mp3"

import { BsCloudSnow, BsFire } from 'react-icons/bs'
import { MdForest } from 'react-icons/md'
export const data = [
    {
        logo:<BsFire size={110} color="white"/>,
        name:"Fire" ,
        uri:rain
    },
    {
        logo:<BsCloudSnow size={110} color="white"/>,
        name:"Snow" ,
        uri:rain
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Forest" ,
        uri:stream
    }
];