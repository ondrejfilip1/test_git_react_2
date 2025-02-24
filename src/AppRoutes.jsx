import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import About from "./About";
import Contact from "./cont";
<<<<<<< HEAD
import Photos from "./photos";
import EshopHodinky from "./EschopHodinky";
import Casket from "./Casket";
=======
>>>>>>> f3030bf (eshop)

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
<<<<<<< HEAD
          <Route path="/photos" element={<Photos />} />
          <Route path="/ehodinky" element={<EshopHodinky />} />
          <Route path="/casket" element={<Casket />} />
=======
>>>>>>> f3030bf (eshop)
        </Routes>
      </BrowserRouter>
    </>
  );
}
