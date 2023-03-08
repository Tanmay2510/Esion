import React, { useContext } from 'react'
import { UserStoreContext } from '../context/userContext'
function useAuth() {
  return useContext(UserStoreContext)
}

export default useAuth;