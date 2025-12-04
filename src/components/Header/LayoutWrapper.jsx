import { Routes, Route, useLocation } from "react-router-dom";
import Links from "./Links";
import Footer from "../Footer/Footer";

import Home from "../../routes/Home";
import About from "../../routes/About";
import Contact from "../../routes/Contact";
import Project from "../../routes/Project";
import Service from "../../routes/Service";

export default function LayoutWrapper() {
  const location = useLocation();

  // Hide navbar + footer for admin section
  const hideUI = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideUI && <Links />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!hideUI && <Footer />}
    </>
  );
}
