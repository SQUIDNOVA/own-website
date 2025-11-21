import React from "react";
import NavBar from "./NavBar";
import Home from "../../routes/Home";
import About from "../../routes/About";
import Contact from "../../routes/Contact";
import Project from "../../routes/Project";
import Service from "../../routes/Service";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Links() {

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/project" },
    { name: "Service", path: "/service" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <BrowserRouter>
        {/* Fixed Navbar */}
        <div className="fixed top-[3%] left-0 w-full z-50 bg-transparent">
            <NavBar />
        </div>

        {/* Content starts below navbar */}
        <div>
            <Routes>
              {navLinks.map((links, index) => (
                <Route
                  key={index}
                  path={links.path}
                  element={
                    links.name === "Home" ? (<Home />) :
                    links.name === "About" ? (<About />) :
                    links.name === "Service" ? (<Service />) :
                    links.name === "Project" ? (<Project />) :
                    links.name === "Contact" ? (<Contact />) : null
                  }
                />
              ))}
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
