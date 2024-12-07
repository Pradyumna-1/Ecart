import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Pages/Navbar";

import Man from "./Component/Collection/Man";
import Women from "./Component/Collection/Women";
import Electronics from "./Component/Collection/Electronics";
import Jewellery from "./Component/Collection/Jewellery";

import Cards from "./Component/Pages/Cards";
import Footer from "./Component/Pages/Footer";
import Chief from "./Component/Pages/Chief";
import Address from "./CRUD/Address";
import UpdateAddress from "./CRUD/UpdateAddress";
import AddNewAddress from "./CRUD/AddNewAddress";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Chief />} />
        <Route path="/updateaddress" element={<UpdateAddress />} />
        <Route path="/addnewaddress" element={<AddNewAddress />} />
        <Route path="/address" element={<Address />} />
        <Route path="/man" element={<Man />} />
        <Route path="/women" element={<Women />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewellery" element={<Jewellery />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
