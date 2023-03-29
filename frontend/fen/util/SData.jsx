import fire from "../assets/sounds/fire_sound.mp3"
import snow from "../assets/sounds/snow_sound.mp3"
import forest from "../assets/sounds/forest_sound.mp3"
import { BsCloudSnow, BsFire } from 'react-icons/bs'
import { MdForest } from 'react-icons/md'
export const data = [
    {
        logo:<BsFire size={110} color="white"/>,
        name:"Fire" ,
        uri:fire
    },
    {
        logo:<BsCloudSnow size={110} color="white"/>,
        name:"Snow" ,
        uri:snow
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Forest" ,
        uri:forest
    }
];