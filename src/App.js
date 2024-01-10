import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Catalog } from "./Components/Catalog/Catalog";
import Cart from "./Components/cart/Cart";
import SinglePage from "./Components/SinglePage/Single.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/SinglePage" element={<SinglePage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
