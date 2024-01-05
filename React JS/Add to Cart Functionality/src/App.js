import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Product_card from "./Components/Product_card";
import Home from "./Pages/Home";
import Simple_Cart_2 from "./Simple_Cart_2";
import Simple_cart from "./Simple_cart";
import Cart from "./Pages/Cart";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route Index path="/" element={<> <Header/> <Home/> </>}></Route>
        <Route path="/Cart" element={<> <Header/> <Cart/> </>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
