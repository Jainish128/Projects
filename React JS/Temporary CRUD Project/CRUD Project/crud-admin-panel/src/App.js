
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './Components/Footer';
import Header from './Components/Header'
import Topbar from './Components/Topbar';
import Blank_Page from './Pages/Blank_Page';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Forgot_Password from './Pages/Forgot_Password';
import Signup from './Pages/Signup';
import Add_Products from './Pages/Add_Products';
import Add_Category from './Pages/Add_Category';
import Manage_Products from './Pages/Manage_Products';
import Add_Blogs from './Pages/Add_Blogs';
import Manage_Categories from './Pages/Manage_Categories';
import Manage_Users from './Pages/Manage_Users';
import Error_404 from './Pages/Error_404';
import Manage_Blogs from './Pages/Manage_Blogs';
import Profile from './Pages/Profile';
import Manage_Messages from './Pages/Manage_Messages';
import Manage_Shirts from './Pages/Manage_Shirts';
import Manage_T_Shirts from './Pages/Manage_T_Shirts';
import Manage_Pants from './Pages/Manage_Pants';
import Manage_Ethnic from './Pages/Manage_Ethnic';
import Manage_Suits from './Pages/Manage_Suits';
import Manage_Shoes from './Pages/Manage_Shoes';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer></ToastContainer>
      <Routes>

        <Route Index path='/' element={<> <Login/> </>}></Route>
        <Route path='/Signup' element={<> <Signup/> </>}></Route>
        <Route path='/Forgot_Password' element={<> <Forgot_Password/> </>}></Route>
        
        <Route path='/Error_404' element={<> <Error_404/> </>}></Route>
        <Route path='/Blank_Page' element={<> <Blank_Page/> <Footer/> </>}></Route>

        <Route path='/Dashboard' element={<> <Dashboard/> <Footer/> </>}></Route>
        <Route path='/Profile' element={<> <Profile/> <Footer/> </>}></Route>

        <Route path='/Add_Products' element={<> <Add_Products/> <Footer/> </>}></Route>
        <Route path='/Manage_Products' element={<> <Manage_Products/> <Footer/> </>}></Route>

        <Route path='/Add_Category' element={<> <Add_Category/> <Footer/> </>}></Route>
        <Route path='/Manage_Categories' element={<> <Manage_Categories/> <Footer/> </>}></Route>

        <Route path='/Add_Blogs' element={<> <Add_Blogs/> <Footer/> </>}></Route>
        <Route path='/Manage_Blogs' element={<> <Manage_Blogs/> <Footer/> </>}></Route>

        <Route path='/Manage_Users' element={<> <Manage_Users/> <Footer/> </>}></Route>
        <Route path='/Manage_Messages' element={<> <Manage_Messages/> <Footer/> </>}></Route>
        
        
        
        
        <Route path='/Manage_Shirts' element={<> <Manage_Shirts/> <Footer/> </>}></Route>
        <Route path='/Manage_T_Shirts' element={<> <Manage_T_Shirts/> <Footer/> </>}></Route>
        <Route path='/Manage_Pants' element={<> <Manage_Pants/> <Footer/> </>}></Route>
        <Route path='/Manage_Ethnic' element={<> <Manage_Ethnic/> <Footer/> </>}></Route>
        <Route path='/Manage_Suits' element={<> <Manage_Suits/> <Footer/> </>}></Route>
        <Route path='/Manage_Shoes' element={<> <Manage_Shoes/> <Footer/> </>}></Route>
    


      </Routes>
    </BrowserRouter>
  );
}

export default App;
