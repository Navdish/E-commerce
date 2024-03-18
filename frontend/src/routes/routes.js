import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import Home from '../pages/Home/Home';
import MenuAppBar from '../components/Navbar/Navbar';

function AllRoutes() {
  const Protected = ({ children }) => {
    // const user = useSelector((state)=> state.user.user);
    // return Object.keys(user).length === 0 ? <Navigate to="/Login" /> : <>{children}</>;
  };
  return (
    <>
      <BrowserRouter> 
      <MenuAppBar/>
        <Routes>
          <Route path='/' element={<Navigate to ='/Home' replace={true} />}></Route>
          {/* <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Login' element={<Login />}></Route> */}
          <Route path='/Home' element={<Home />} />
          {/* <Route path='/Profile' element={<Protected><Profile /></Protected>}></Route>
          <Route path='/Network' element={<Protected><Network /></Protected>}></Route>
          <Route path='/Messaging' element={<Protected><Messaging /></Protected>}></Route>
          <Route path='/Invitation' element={<Protected><Invitation /></Protected>}></Route>
          <Route path='/Notification' element={<Protected><Notification/></Protected>}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AllRoutes;