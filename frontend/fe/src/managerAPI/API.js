import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const handleregister = (user,dispatch) =>{
    console.log(user)
    axios.post(BASE_URL+"/register",user,{withCredentials:true})
            .then( res => {
                // dispatch(setregister(res))
                console.log(res)
            })

}
export const handlelogin = (user,dispatch)=>{
    console.log(user)
    axios.post(BASE_URL+"/login",user,{withCredentials:true})
    .then( res => {
        // dispatch(setregister(res))
        console.log(res)
    })
    
}