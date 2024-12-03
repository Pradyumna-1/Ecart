import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Menu from "./components/pages/Menu";
import Contact from "./components/pages/Contact";
import Man from "./Component/Pages/Man";
import Women from "./Component/Pages/Women";
import Electronics from "./Component/Pages/Electronics";
import Jewellery from "./Component/Pages/Jewellery";
import Carousell from "./Component/Carousell";
import Cards from "./Component/Cards/Cards";

function App() {
  return (
    //   <BrowserRouter>
    // <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/menu" element={<Menu />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </BrowserRouter>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/man" element={<Man />} />
        <Route path="/women" element={<Women />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewellery" element={<Jewellery />} />
      </Routes>
      <Carousell />
      <Cards />
    </BrowserRouter>
  );
}

export default App;
