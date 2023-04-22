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
import { BsCloudSnow, BsFire,BsFan ,BsCloudRain} from 'react-icons/bs'
import { MdForest,MdOutlineLocalCafe } from 'react-icons/md'
import {RiThunderstormsFill} from 'react-icons/ri'
import {BiTrain,BiWalk,BiWind} from 'react-icons/bi'
import {CgEditNoise} from 'react-icons/cg'
import {GiNestBirds,GiCommercialAirplane,GiWaves,GiThreeLeaves,GiNightSky,GiRiver,GiSplashyStream} from 'react-icons/gi'
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
        logo:<GiNestBirds size={110} color="white"/>,
        name:"Birds" ,
        uri:birds
    },
    {
        logo:<GiCommercialAirplane size={110} color="white"/>,
        name:"Airplane" ,
        uri:airplane
    },
    {
        logo:<MdOutlineLocalCafe size={110} color="white"/>,
        name:"Cafe" ,
        uri:cafe
    },
    {
        logo:<BsFan size={110} color="white"/>,
        name:"Fan" ,
        uri:fan
    },
    {
        logo:<BsFire size={110} color="white"/>,
        name:"Fire" ,
        uri:fire
    },
    {
        logo:<GiThreeLeaves size={110} color="white"/>,
        name:"Leaves" ,
        uri:leaves
    },
    {
        logo:<GiNightSky size={110} color="white"/>,
        name:"Night" ,
        uri:night
    },
    {
        logo:<BsCloudRain size={110} color="white"/>,
        name:"Rain" ,
        uri:rain
    },
    {
        logo:<GiRiver size={110} color="white"/>,
        name:"River" ,
        uri:river
    },
    {
        logo:<GiSplashyStream size={110} color="white"/>,
        name:"Stream" ,
        uri:stream
    },
    {
        logo:<RiThunderstormsFill size={110} color="white"/>,
        name:"Thunder" ,
        uri:thunder
    },
    {
        logo:<BiTrain size={110} color="white"/>,
        name:"Train" ,
        uri:train
    },
    {
        logo:<BiWalk size={110} color="white"/>,
        name:"Walking" ,
        uri:walk
    },
    {
        logo:<GiWaves size={110} color="white"/>,
        name:"Waves" ,
        uri:waves
    },
    {
        logo:<CgEditNoise size={110} color="white"/>,
        name:"White Noises" ,
        uri:whiteNoise
    },
    {
        logo:<BiWind size={110} color="white"/>,
        name:"Wind" ,
        uri:wind
    }
]