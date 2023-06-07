import axios from "axios";
import { setLogin, setRegister , setLogout} from "../context/userAction";

const BASE_URL = "http://localhost:3001";

export const handleregister = (user,dispatch) =>{
    axios.post(BASE_URL+"/register",user,{withCredentials:true})
            .then( res => {
                dispatch(setRegister(res.data))
            })

}

export const handlePlaylist = (dataName,dataCurrent,dispatch)=>{
    const playlist = {
        name:dataName,
        data:dataCurrent
    }
  
    axios.patch(BASE_URL+"/playList",playlist,{withCredentials:true})
    .then( res => {
        // console.log(res)
        // dispatch(setRegister(res.data))
    })
}

export const hanldeLogout = (dispatch) =>{
    axios.get(BASE_URL+"/logout",{withCredentials:true}).then((res)=>{
        dispatch(setLogout(res));
    })
}


export const handlelogin = (user,dispatch)=>{
    axios.post(BASE_URL+"/login",user,{withCredentials:true})
    .then( res => {
        dispatch(setLogin(res.data))

    })
    
}