import snow from "../assets/sounds/snow_sound.mp3"
import airplane from "../assets/sounds/airplane_sound.mp3"
import birds from "../assets/sounds/birds_sound.mp3"
import cafe from "../assets/sounds/cafe_sound.mp3"
import fan from "../assets/sounds/fan_sound.mp3"
import fire from "../assets/sounds/fire_sound.mp3"
import forest from "../assets/sounds/forest_sound.mp3"
import leaves from "../assets/sounds/leaves_sound.mp3"
import night from "../assets/sounds/night_sound.mp3"
import rain from "../assets/sounds/rain_sound.mp3"
import river from "../assets/sounds/river_sound.mp3"
import stream from "../assets/sounds/stream.mp3"
import thunder from "../assets/sounds/thunder_sound.mp3"
import train from "../assets/sounds/train_sound.mp3"
import walk from "../assets/sounds/walk_sound.mp3"
import waves from "../assets/sounds/waves_sound.mp3"
import whiteNoise from "../assets/sounds/whitenoise_sound.mp3"
import wind from "../assets/sounds/wind_sound.mp3"
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

export const notSampledata = [
    ...data,
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Birds" ,
        uri:birds
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Airplane" ,
        uri:airplane
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Cafe" ,
        uri:cafe
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Fan" ,
        uri:fan
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Fire" ,
        uri:fire
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Leaves" ,
        uri:leaves
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Night" ,
        uri:night
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Rain" ,
        uri:rain
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"River" ,
        uri:river
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Stream" ,
        uri:stream
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Thunder" ,
        uri:thunder
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Train" ,
        uri:train
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Walking" ,
        uri:walk
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Waves" ,
        uri:waves
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"White Noises" ,
        uri:whiteNoise
    },
    {
        logo:<MdForest size={110} color="white"/>,
        name:"Wind" ,
        uri:wind
    }
]