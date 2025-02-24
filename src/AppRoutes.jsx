import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import About from "./About";
import Casket from "./Casket";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/casket" element={<Casket />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
