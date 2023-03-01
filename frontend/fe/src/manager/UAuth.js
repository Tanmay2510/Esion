import React, { useContext } from 'react'
import { UserStoreContext } from '../context/userContext';

function useAuth() {
    const { login} = useContext(UserStoreContext);
    console.log(login)
  return login
}

export default useAuth;