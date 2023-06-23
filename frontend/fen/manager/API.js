import axios from "axios";
import { setLogin, setRegister , setLogout,isSave,setPlaylistClient} from "../context/userAction";

const BASE_URL = "http://localhost:3001";

export const handleregister = async (user,dispatch) =>{
    await axios.post(BASE_URL+"/register",user,{withCredentials:true})
            .then( res => {
                dispatch(setRegister(res.data))
            })

}

export const getPlaylist = (dispatch)=>{
    const gid = localStorage.getItem('userId')
    axios.get(BASE_URL+"/playList/"+gid,{withCrdentials:true})
    .then(res=>{
        dispatch(setPlaylistClient(res.data))
    })
}
export const handleDel = (dispatch,deldata)=>{
    const gid = localStorage.getItem('userId')
    console.log(deldata)
    axios.patch(BASE_URL+"/delplayList/"+gid, deldata ,{withCrdentials:true})
    .then(res=>{
    })
}
export const handlePlaylist = (dataName,dataCurrent,dispatch)=>{
    const playlist = {
        name:dataName,
        data:dataCurrent
    }
    const gid = localStorage.getItem('userId')
  
    axios.patch(BASE_URL+"/playList/"+gid,playlist,{withCredentials:true})
    .then( res => {
        dispatch(isSave(res))
      
    })
}

export const hanldeLogout = (dispatch) =>{
    axios.get(BASE_URL+"/logout",{withCredentials:true}).then((res)=>{
        dispatch(setLogout(res));
    })
}


export const handlelogin = async (user,dispatch)=>{
    const r = await axios.post(BASE_URL+"/login",user,{withCredentials:true})
    .then( res => {
        console.log(res)
        dispatch(setLogin(res.data))

    })
}