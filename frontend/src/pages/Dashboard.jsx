
import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import Header from '../components/Header'
import { applicationStatus } from '../features/HostForm/formSlice'
import "../components/dashboard.css"
import Banner from "../components/Banner"

function Dashboard() {

  const dispatch = useDispatch()

  const {user}= 
 useSelector(
     (state)=> state.auth
 )


  
  return (
    <>  
        <Header/>
        <Banner/>
        
    </>
  )
}

export default Dashboard
