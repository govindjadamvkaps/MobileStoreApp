import React, { useState } from 'react'
import { useNavigate } from 'react-router'
const Logout = () => {
    const history = useNavigate()
    const [tokenn, setTokenn] = useState()
    const tok = localStorage.removeItem("token")

    alert('logout successfuly')
    history("/login")
  return (
    <>
        
    </>
  )
}

export default Logout