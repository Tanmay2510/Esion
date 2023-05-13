import useRouter from "next/router"
let router = useRouter;
export const setRegister = (data) =>{
    router.push("/Dashboard")
    return (state)=>{
        return{
            ...state,
            login:data.login,
            name:data.Name
        }
    }
}
export const setLogout = (data)=>{
    console.log(data)
    router.push("/")
    return (state) =>{
        return {
            ...state,
            login:data.login,
            email:" ",
        }
    }
}
export const setModal = (click)=>{
    return (state) =>{
        return{
            ...state,
            sideNavClicked:!click
        }
    }
}

export const setLogin = (data) =>{
    router.push("/Dashboard")

      return (state)=>{
        return{
            ...state,
            login:data.login,
            name:data.Name
        }
    }
}