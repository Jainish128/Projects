
import './App.css';
import Login from './Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Singup from './Singup';

function App() {
  return (
    
    <BrowserRouter>
     <ToastContainer></ToastContainer>
      <Routes>
        <Route Index path='/' element={<> <Login/> </>} ></Route>
        <Route Index path='/Signup' element={<> <Singup/> </>} ></Route>
        <Route path='/Home' element={<> <Home/> </>} ></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
