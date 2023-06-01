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
export const setModal = (click,whichOne)=>{
    console.log(whichOne)

    if(whichOne==="createPlaylistClicked"){
        return (state) =>{
            return{
                ...state,
                sideNavClicked:!click,
                createPlaylistClicked:true,
                deletePlaylistClicked:false,
                yourPlaylistClicked:false
            }
        }
    }
    else if(whichOne==="deletePlaylistClicked"){
        return (state) =>{
            return{
                ...state,
                sideNavClicked:!click,
                createPlaylistClicked:false,
                deletePlaylistClicked:true,
                yourPlaylistClicked:false
            }
        }
    }else if(whichOne==="yourPlaylistClicked"){
        return (state) =>{
            return{
                ...state,
                sideNavClicked:!click,
                createPlaylistClicked:false,
                deletePlaylistClicked:false,
                yourPlaylistClicked:true
            }
        }
    }
  
}

export const setPlaylist = (data)=>{
        return(state) =>{
            return {
                ...state,
                currentName:[data]
            }
        }
}
export const setSave = (data)=>{
    
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