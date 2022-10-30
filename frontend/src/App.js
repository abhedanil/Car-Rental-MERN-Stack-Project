import {BrowserRouter as Router, Routes,Route} from 'react-router-dom' 
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'  
 import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

import HostApply  from './pages/Host/HostApply';
import ViewStatus from './pages/Host/ViewStatus'
import AdminHome from './pages/Admin/AdminHome';
import Userslist from './pages/Admin/Userslist'
import HostApps from './pages/Admin/HostApps';
import AddCar from './pages/Host/AddCar'
import HostCars from './pages/Host/HostCars';
import Layout from './components/Layout';
import Secondheader from './components/Secondheader';

import CarRequest from "./pages/Admin/CarRequest"
import FilterPage from './pages/FilterPage';

import BookingCar from './pages/BookingCar';
import PaymentSuccessPage from './pages/PaymentSuccessPage';

import UserBookings from '../src/pages/UserBookings';
import UserAccount from './pages/UserAccount';

function App() {
  return (
    <>
      <Router>
        <div className="container">
          
          <Routes>

              <Route exact path='/' element={<Dashboard/>} />
              <Route exact path='/adminAndHost' element={<Layout/>} />
              <Route exact path='/admin' element={<AdminHome/>}/>
              <Route exact path='/admin/usersList' element={<Userslist/>}/>
              <Route exact path='/admin/hostApplications' element={<HostApps/>}/>
              <Route exact path='/host/addcar' element={<AddCar/>}/>
              <Route exact path="/host/myCars" element={<HostCars/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
              <Route path="/becomeHost" element={<HostApply/>}/>
              <Route path="viewStatus" element={<ViewStatus/>}/>
              <Route exact path="/admin" element={<AdminHome/>}/>
              {/* <Route exact path="/viewAllApps" element={<Allapps/>}/> */}
               <Route path="/head" element={<Secondheader/>}/>
               <Route path="/getCarRequests" element={<CarRequest/>}/>
               <Route path="/filterPage" element={<FilterPage/>}/>
                <Route path='/booking/:carid' exact element={<BookingCar/>}/>
                <Route path="/paymentSuccess" exact element={<PaymentSuccessPage/>}/>
                <Route path="/userProfile" exact element={<UserAccount/>}/>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
