import React from 'react';
import Main from './Main';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer></ToastContainer>
      <Main />
    </>
  )
}

export default App