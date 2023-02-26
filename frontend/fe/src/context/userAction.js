import useRouter from "next/router"
let router = useRouter;

export const checkSession = (data)=>{
    if(data.login===true){
                  router.push('/dashboard');
    }else{
                  router.push('/')
    }
    return (state) =>{
        return {
            ...state,
            email:data.email,
            customerId:data.customerId
        }
    }
}
export const setLogin = (data)=>{
          alert(data.data.message)
            if(data.data.matched===true){
                router.push('/dashboard');
            }else{
                router.push('/')
            }
            return (state) =>{
                return {
                    ...state,
                    login:data.data.login,
                    email:data.data.email,
                    customerId:data.data.customerId,
                }
            }
}



export const setregister = (res)=>{
          alert(res.data.message)
                if(res.data.matched===true){
                   router.push('/dashboard');
                }else{
                    router.push('/')
                }
                return (state) =>{
                    return {
                        ...state,
                        login:res.data.login,
                        email:res.data.email,
                        customerId:res.data.customerId,
                    }
                }
}

export const setlogout = (res)=>{
      if(res.data.login===false){
        router.push("/");
      }
    return (state) =>{
        return {
            ...state,
            login:false,
            email:" ",
            customerId:null
        }
    }
}