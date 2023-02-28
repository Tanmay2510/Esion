export const setRegister = (data) =>{
    console.log(data)
    return (state)=>{
        return{
            ...state,
            login:data.login,
            name:data.Name
            
        }
    }
}

export const setLogin = (data) =>{
      return (state)=>{
        return{
            ...state,
            login:data.login,
            name:data.Name
            
        }
    }
}