import Reglog from '@/component/Form/Reglog'
import useAuth from '@/hook/useAuth'
import React from 'react'

function User() {
  const {Msg} = useAuth();
  console.log(Msg)
  return (
    <div className="userCont">
     <Reglog />
    </div>
  )
}

export default User