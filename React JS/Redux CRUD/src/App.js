import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// React Toastify :
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './feature/Website/Component/Header'
import Footer from './feature/Website/Component/Footer'
import Home from './feature/Website/Pages/Home'
import Add_data from './feature/Website/Pages/Add_data'
import Manage_data from './feature/Website/Pages/Manage_data'
import Contact from './feature/Website/Pages/Contact'
import Manage_Contact from './feature/Website/Pages/Manage_Contact';

function App() {
  return (
  
    <BrowserRouter>
    <ToastContainer></ToastContainer>
      <Routes>
        <Route Index path='/' element={<> <Header/> <Home/> <Footer/>  </>}></Route>
        <Route path='/Add_Data' element={<> <Header/> <Add_data/> <Footer/>  </>}></Route>
        <Route path='/Manage_Data' element={<> <Header/> <Manage_data/> <Footer/>  </>}></Route>
        <Route path='/Contact' element={<> <Header/> <Contact/> <Footer/>  </>}></Route>
        <Route path='/Manage_Contact' element={<> <Header/> <Manage_Contact/> <Footer/>  </>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App