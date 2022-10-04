import {FaRoad, FaSignInAlt,FaSignOutAlt,FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout,reset}  from '../features/Auth/authSlice'
import { useEffect } from 'react'
import { applicationStatus } from '../features/HostForm/formSlice'
import './header.css'

function Header() {

    const navigate= useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=> state.auth)
    console.log(user)
   
   

    if(user?.isAdmin){

        navigate("/admin")
    }


    const onLogout  = () =>{
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }
   
  return (
    <header className='headerr'>
        <div className='headerr'>
            <Link to="/" style={{textDecoration: 'none'}}><h1 className='logo'>Rent UP</h1></Link>
        </div>
        <ul >
            {user ? ( 
            <>
               
                    <li >
                    <Link style={{textDecoration: 'none'}} to="/becomeHost"> <FaSignInAlt/>Become a Host </Link>
                    
                    </li>
               
                    <span>
                    
                    <Link style={{textDecoration: 'none'}} to="/viewStatus"> <FaSignInAlt/>View Application Status </Link>
                        
                    </span>
                
                   
                
                
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
                <Link style={{textDecoration: 'none'}} to="/login"> <FaSignInAlt/>Login </Link>
            </li>
            <li>
                <Link style={{textDecoration: 'none',paddingRight: 25 ,margin:10 }} to="/register"> <FaUser/>Register </Link>
            </li>
            
            </>) }
        </ul>
    </header>
  )
}

export default Header
