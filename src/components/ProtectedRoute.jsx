import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { userAuth } from '../context/AuthContext'


const ProtectedRoute = ({children}) => {
    const {user} = userAuth()
    const navigate =useNavigate()
    if(!user){
        return navigate('/')
    } else{
        return children
    }
}

export default ProtectedRoute