import React from 'react'
import {FaRoad, FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout,reset}  from '../../redux/features/Auth/authSlice'

function ApplyNav() {
    const navigate= useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=> state.auth)
    console.log(user)
    const onLogout  = () =>{
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }

  return (
    <header className='header'>
    <div className='header'>
        <Link to="/">Hyra Car Rental</Link>
    </div>
    <ul>
        {user ? ( 
        <>
            <li>
                <Link to="/"> <FaSignInAlt/>Back to home </Link>
            </li>
            <li>
                <button className='btn' onClick={onLogout}>

                    <FaSignOutAlt/>Logout 
                </button>
               
            
            </li>
            <li>
                <button className='btn'>
                    {user.name}
                </button>
            </li>
        </>
        ) :  
        (
        <>
        
        <li>
            <Link to="/login"> <FaSignInAlt/>Login </Link>
        </li>
        <li>
            <Link to="/register"> <FaUser/>Register </Link>
        </li>
        
        </>) }
    </ul>
</header>
  )
}

export default ApplyNav
