
// import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Man_Fashion from './Pages/Man_Fashion';
// import Woman_Fashion from './Pages/Woman_Fashion';
// import Electronic from './Pages/Electronic';
// import Jewellery from './Pages/Jewellery';

import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Contact_us from './Pages/Contact_us';
import Profile from './Pages/Profile';
import Header2 from './Components/Header2';
import Product_Card from './Components/Product_Card';
// import Man_Fashion_2 from './Pages/Man_Fashion_2';
import Casual_outfit from './Pages/Casual_outfit';
import Ethnic_Outfits from './Pages/Ethnic_Outfits';
import Business_Professional_Outfits from './Pages/Business_Professional_Outfits';
// import Home from './Pages/Home';

function App() {
  return (

    <BrowserRouter>
    <ToastContainer></ToastContainer>
      <Routes>
        <Route Index path='/' element={<> <Header/> <Casual_outfit/> <Ethnic_Outfits/> <Business_Professional_Outfits/> <Footer/> </>}> </Route>
        <Route path='/Casual_Outfits' element={<> <Header/> <Casual_outfit/> <Footer/> </>}> </Route>
        <Route path='/Ethnic_Outfits' element={<> <Header/> <Ethnic_Outfits/> <Footer/> </>}> </Route>
        <Route path='/Business_Professional_Outfits' element={<> <Header/> <Business_Professional_Outfits/> <Footer/> </>}> </Route>

        <Route path='/Signup' element={<> <Header2/> <Signup/> <Footer/> </>}> </Route>
        <Route path='/Login' element={<> <Header2/> <Login/> <Footer/> </>}> </Route>
        <Route path='/Contact_Us' element={<> <Header2/> <Contact_us/> <Footer/> </>}> </Route>
        <Route path='/Profile' element={<> <Header2/> <Profile/> <Footer/>  </>}> </Route>
        <Route path='/Header2' element={<> <Header2/> </>}> </Route>
        {/* <Route path='/Header' element={<> <Header/> </>}> </Route> */}
        <Route path='/Product_Card' element={<> <Product_Card/> </>}> </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
