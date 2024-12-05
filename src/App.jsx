import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import Contact from "./components/pages/Contact";
import Man from "./Component/Collection/Man";
import Women from "./Component/Collection/Women";
import Electronics from "./Component/Collection/Electronics";
import Jewellery from "./Component/Collection/Jewellery";
import Carousell from "./Component/Carousell";
import Cards from "./Component/Pages/Cards";
import Footer from "./Component/Pages/Footer";
import Chief from "./Component/Pages/Chief";
import Address from "./CRUD/Address";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Chief />} />
        <Route path="/address" element={<Address />} />
        <Route path="/man" element={<Man />} />
        <Route path="/women" element={<Women />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewellery" element={<Jewellery />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
