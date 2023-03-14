import rain from "../assets/sounds/rain.mp3"
import stream from "../assets/sounds/stream.mp3"

import { BsCloudSnow, BsFire } from 'react-icons/bs'
import { MdForest } from 'react-icons/md'
export const data = [
    {
        logo:<BsFire size={70} />,
        name:"Fire" ,
        uri:rain
    },
    {
        logo:<BsCloudSnow size={70}/>,
        name:"Snow" ,
        uri:rain
    },
    {
        logo:<MdForest size={70}/>,
        name:"Forest" ,
        uri:stream
    }
];