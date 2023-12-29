import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About_Us from './Pages/About_Us';
import Breadcrumb from './Components/Breadcrumb';
import Instagram_Feed from './Components/Instagram_Feed';
import Service_Block from './Components/Service_Block';
import Our_Service from './Pages/Our_Service';
import Contact_Us from './Pages/Contact_Us';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import My_Account from './Pages/My_Account';
import Wishlist from './Pages/Wishlist';
import Shop_Details from './Pages/Shop_Details';
import Image_Slider from './Components/Image_Slider';
import Banner from './Components/Banner';
import Profile from './Pages/Profile';
import Product_Card from './Components/Product_Card';
import Category_Card from './Components/Category_Card';
import Products_Page from './Pages/Products_Page';
import Singup from './Pages/Singup';
import Login from './Pages/Login';
import Blog_Card from './Components/Blog_Card';
import Products_Sidebar from './Components/Products_Sidebar';
import Products_Filterbar from './Components/Products_Filterbar';
import Shirts from './Pages/Products/Shirts';

function App() {
  return (
    
    <BrowserRouter>
    <ToastContainer></ToastContainer>
      <Routes>

        <Route Index path='/' element={<> <Header/> <Banner/> <Home/> <Instagram_Feed/> <Footer/> </>}></Route>
        <Route path='/About_Us' element={<> <Header/> <Breadcrumb pageName="ABOUT US"/> <About_Us/>  <Instagram_Feed/> <Footer/> </>}></Route>
        <Route path='/Our_Service' element={<> <Header/> <Breadcrumb pageName="Services"/> <Our_Service/>  <Instagram_Feed/> <Footer/> </>}></Route>
        <Route path='/Contact_Us' element={<> <Header/> <Breadcrumb pageName="Contact Us"/> <Contact_Us/>  <Instagram_Feed/> <Footer/> </>}></Route>
        <Route path='/Singup' element={<> <Header/> <Breadcrumb pageName="Singup"/> <Singup/> <Footer/> </>}></Route>
        <Route path='/Login' element={<> <Header/> <Breadcrumb pageName="Login"/> <Login/> <Footer/> </>}></Route>
        <Route path='/Cart' element={<> <Header/> <Breadcrumb pageName="Cart"/> <Cart/>  <Instagram_Feed/> <Footer/> </>}></Route>
        <Route path='/Checkout' element={<> <Header/> <Breadcrumb pageName="Checkout"/> <Checkout/>  <Instagram_Feed/> <Footer/> </>}></Route>
        <Route path='/My_Account' element={<> <Header/> <Breadcrumb pageName="My Account"/> <My_Account/>  <Instagram_Feed/> <Footer/> </>}></Route>
        <Route path='/Wishlist' element={<> <Header/> <Breadcrumb pageName="Wishlist"/> <Wishlist/>  <Instagram_Feed/> <Footer/> </>}></Route>
        <Route path='/Shop_Details' element={<> <Header/> <Breadcrumb pageName="Shop Detail"/> <Shop_Details/>  <Instagram_Feed/> <Footer/> </>}></Route>
        <Route path='/Image_Slider' element={<> <Image_Slider/> </>}></Route>
        <Route path='/Banner' element={<> <Banner/> </>}></Route>
        <Route path='/Profile' element={<> <Header/> <Profile/> <Footer/> </>}></Route>

        <Route path='/Product_Card' element={<> <Product_Card/> </>}></Route>
        <Route path='/Category_Card' element={<> <Category_Card/> </>}></Route>
        <Route path='/Blog_Card' element={<> <Blog_Card/> </>}></Route>
        <Route path='/Products_Page' element={<> <Header/> <Products_Page/> <Footer/> </>}></Route>

        <Route path='/Shirts' element={<> <Header/> <Shirts/> <Footer/> </>}></Route>
        
        <Route path='/Products_Sidebar' element={<> <Header/> <Products_Sidebar/> <Footer/> </>}></Route>
        <Route path='/Products_Filterbar' element={<> <Header/> <Products_Filterbar/> <Footer/> </>}></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
