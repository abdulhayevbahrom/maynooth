import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Catalog } from "./Components/Catalog/Catalog";
import Cart from "./Components/cart/Cart";
import SinglePage from "./Components/SinglePage/Single";
import Home from "./router/home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CreateProduct from "./Components/createProduct/CreateProduct";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalog/SinglePage" element={<SinglePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
