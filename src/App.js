import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Catalog } from "./Components/Catalog/Catalog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
