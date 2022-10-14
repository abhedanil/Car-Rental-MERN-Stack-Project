import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useLocation, useNavigate} from "react-router-dom"
import './layout.css'
import {logout,reset}  from '../redux/features/Auth/authSlice'

function Layout({children}) {

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const onLogout  = () =>{
    dispatch(logout())
    dispatch(reset())
    navigate("/")
}

  const { user } = useSelector((state) => state.auth);
    const [collapsed, setCollapsed] = useState(false)
    const location = useLocation()
    const adminMenu =[
      {
      name: 'Home',
      path:'/admin',
      icon:"ri-home-2-line"
      },
      {
        name:'Applications',
        path:'/admin/hostApplications',
        icon:"ri-grid-fill"
      },
      {
        name:'Users',
        path:'/admin/usersList',
        icon:"ri-user-line"
      },
      {
        name:'Car request',
        path:'/getCarRequests',
        icon:'ri-car-line'
      },

      {
        name:'Hosts',
        path:'/carApps',
        icon:"ri-user-star-line"
      },
      {
        name:'Rentals',
        path:'/rentHistory',
        icon:"ri-edit-box-line"
      },
      {
        name:'profile',
        path:'/adminprofile',
        icon:'ri-user-line'
      },
      {
        name:'Logout',
        path:'/logout',
        icon:"ri-logout-box-line"
      },
  ]

    const HostMenu =[
      {
        name:'Dashboard',
        path:'/host',
        icon:'ri-dashboard-fill'
      },
      {
        name:'My Cars',
        path:'/host/myCars',
        icon:'ri-car-line'
      },
      {
        name:"Add Car",
        path:"/host/addcar",
        icon:"ri-add-circle-line"
      },
      {
        name:'Bookings',
        path:'/host/Allbookings',
        icon:'ri-book-3-line'
      },
      {
        name:'Profile',
        path:'/host/profile',
        icon:"ri-layout-fill"
      }


    ]
    const menuToBeRendered = user?.isAdmin?adminMenu : user?.isHost?HostMenu:""
    const role = user?.admin?"Admin" : user?.isHost ? "Host":""
    return (
    <div className='main p-2'>
      
      <div className='d-flex layout'> 
          
          <div className='sidebar' sx={{}}>
              <div className="sidebar-header">
                  <h1>Kira</h1>
              </div>
              <div className="menu">
                    {menuToBeRendered.map((menu)=>{
                        const isActive= location.pathname===menu.path
                        return <div className={`d-flex menu-item ${isActive&&'active-menu-item'}`}>
                                  <i className={menu.icon}></i>
                                  {!collapsed && <Link sx={{paddingRight:"50px" }} to={menu.path}>{menu.name}</Link>}
                                  
                              </div>
                    })}
              </div>
          </div>
          
          <div className="content">
            
              <div className="header">
                   <div>
                        {collapsed ? (
                        <i className="ri-menu-line header-action-icon" onClick={()=>setCollapsed(false)}></i>
                         ):(
                        <i className="ri-close-line header-action-icon" onClick={()=>setCollapsed(true)}></i>
                         )}

                   </div>
                    <div className='header-righ-end'>
                    
                        <h3>{user.name}</h3>
                        <button onClick={onLogout} >Logout</button>
                      
                    </div>
                      
              </div>
              <div className='d-flex'>
                      
                    
              </div>
              <div className="body">
                    {children}
              </div>
          </div>
      </div>
      
    </div>
  ) 
}

export default Layout
