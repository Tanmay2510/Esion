import axios from "axios";
import { setLogin, setRegister } from "../context/userAction";

const BASE_URL = "http://localhost:3001";

export const handleregister = (user,dispatch) =>{
    axios.post(BASE_URL+"/register",user,{withCredentials:true})
            .then( res => {
                dispatch(setRegister(res.data))
            })

}


export const handlelogin = (user,dispatch)=>{
    axios.post(BASE_URL+"/login",user,{withCredentials:true})
    .then( res => {
        dispatch(setLogin(res.data))

    })
    
}