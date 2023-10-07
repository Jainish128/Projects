import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Login from './Pages/Login'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Dashboard from './Pages/Dashboard'
import AddCategories from './Pages/AddCategories'
import Manage_Categories from './Pages/Manage_Categories'
import Add_Products from './Pages/Add_Products'
// import Manage_Products from './Pages/Manage_Products'
import Manage_User from './Pages/Manage_User'
// import Add_Blogs from './Pages/Add_Blogs'
// import Manage_Blogs from './Pages/Manage_Blogs'
import Add_Users from './Pages/Add_Users'
import Manage_Comments from './Pages/Manage_Comment'
import Add_Contries from './Pages/Add_Countries'
import Manage_Country from './Pages/Manage_Country'
import Manage_Login from './Pages/Manage_Login';
import Edit_User from './Pages/Edit_User';
import Manage_Casual_Outfits from './Pages/Manage_Casual_Outfits';
import Manage_Ethnic_Outfits from './Pages/Manage_Ethnic_Outfits';
import Manage_Business_Professional_Outfits from './Pages/Manage_Business_Professional_Outfits';
import Edit_Category from './Pages/Edit_Category';
import Edit_Casual_Outfits from './Pages/Edit_Casual_Outfits';
import Edit_Ethnic_Outfits from './Pages/Edit_Ethnic_Outfits';
import Edit_Business_Professional_Outfits from './Pages/Edit_Business_Professional_Outfits';


function App() {
  return (
    


    <BrowserRouter>
    <ToastContainer> </ToastContainer>
      <Routes>

        <Route Index path='/' element={<> <Login /> </>}> </Route>
        <Route path='/Dashboard' element={<> <Header/> <Dashboard/> <Footer/> </>}> </Route>


        <Route path='/Add_Categories' element={<> <Header/> <AddCategories/> <Footer/> </>}> </Route>
        <Route path='/Manage_Categories' element={<> <Header/> <Manage_Categories/> <Footer/> </>}> </Route>
        <Route path='/Edit_Category/:id' element={<> <Header/> <Edit_Category/> <Footer/> </>}> </Route>
      

        <Route path='/Add_Products' element={<> <Header/> <Add_Products/> <Footer/> </>}> </Route>

        <Route path='/Manage_Casual_Outfits' element={<> <Header/> <Manage_Casual_Outfits/> <Footer/> </>}> </Route>
        <Route path='/Edit_Casual_Outfits/:id' element={<> <Header/> <Edit_Casual_Outfits/> <Footer/> </>}> </Route>

        <Route path='/Manage_Ethnic_Outfits' element={<> <Header/> <Manage_Ethnic_Outfits/> <Footer/> </>}> </Route>
        <Route path='/Edit_Ethnic_Outfits/:id' element={<> <Header/> <Edit_Ethnic_Outfits/> <Footer/> </>}> </Route>

        <Route path='/Manage_Business_Professional_Outfits' element={<> <Header/> <Manage_Business_Professional_Outfits/> <Footer/> </>}> </Route>
        <Route path='/Edit_Business_Professional_Outfits/:id' element={<> <Header/> <Edit_Business_Professional_Outfits/> <Footer/> </>}> </Route>


        <Route path='/Add_Users' element={<> <Header/> <Add_Users/> <Footer/> </>}> </Route>
        <Route path='/Manage_User' element={<> <Header/> <Manage_User/> <Footer/> </>}> </Route>
        <Route path='/Edit_User/:id' element={<> <Header/> <Edit_User/> <Footer/> </>}> </Route>


        <Route path='/Manage_Comments' element={<> <Header/> <Manage_Comments/> <Footer/> </>}> </Route>
        <Route path='/Add_Country' element={<> <Header/> <Add_Contries/> <Footer/> </>}> </Route>
        <Route path='/Manage_Country' element={<> <Header/> <Manage_Country/> <Footer/> </>}> </Route>
        <Route path='/Manage_Login' element={<> <Header/> <Manage_Login/> <Footer/> </>}> </Route>
        
      </Routes>
    </BrowserRouter>

  )
}

export default App