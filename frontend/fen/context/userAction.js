import useRouter from "next/router"
let router = useRouter;
export const setRegister = (data) =>{
    if(data.login){
        router.push("/users/"+data.id)
        localStorage.setItem('userId',data.id)
        return (state)=>{
            return{
                ...state,
                theId:data.id,
                login:data.login,
                name:data.Name,
                Msg:data.message

            }
        }
    }else{
        return (state)=>{
            return{
                ...state,
                login:data.login,
                Msg:data.message

            }
        }
    }
   
}
export const setNewUser = () =>{
    router.push("/User")
}
export const setLogout = (data)=>{
    router.push("/")
    localStorage.clear()
    return (state) =>{
        return {
            ...state,
            login:data.login,
            email:" ",
        }
    }
}
export const setModal = (click,whichOne)=>{

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
                yourPlaylistClicked:true
            }
        }
    }else if(whichOne==="X" || whichOne==="Save"){
        return (state) =>{
            return {
                ...state,
                sideNavClicked:!click
            }
        }
    }
  
}
export const setPlaylistClient = (data) =>{
    return(state) =>{
        return {
            ...state,
            thePlaylists:data.theData
        }
    }
}


export const isSave = (data)=>{
    return(state) =>{
        return {
            ...state,
            // theId:data.thid,
            savedPlay:data.saved
        }
    }
}

export const setPlaylist = (data)=>{
        return(state) =>{
            return {
                ...state,
                currentName:data
            }
        }
}

export const setLogin = (data) =>{
    if(data.login){
        router.push("/users/"+data.id)
        localStorage.setItem('userId',data.id)
          return (state)=>{
            return{
                ...state,
                theId:data.id,
                login:data.login,
                name:data.Name,
                Msg:data.message

            }
        }
    }else{
        return (state)=>{
            return{
                ...state,
                login:data.login,
                Msg:data.message
            }
        }
    }
  
}