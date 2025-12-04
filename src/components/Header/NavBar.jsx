import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/squidnovaLogo-croped-removebg-preview.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu state
  const navigate = useNavigate();
  const location = useLocation(); 

  const navLinks = [
    { name: "Overview", path: "/" },
    { name: "Meet us", path: "/about" },
    { name: "Highlights", path: "/project" },
    { name: "Hub", path: "/service" },
    { name: "Let's Talk", path: "/contact" },
  ];

  return (
    <nav className=" bg-darkblue/95 backdrop-blur-xs rounded-2xl px-6 mx-[4%] md:mx-[6%] py-4 shadow-lg relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="w-10 sm:w-16 cursor-pointer"
          onClick={() => navigate("/")}
          onDoubleClick={() => navigate("/admin")}
        />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-white/70 text-base lg:text-lg">
          {navLinks.map((link, index) =>{ 
             const isActive = location.pathname === link.path;
            return(
            <Link key={index} to={link.path} className={`relative group ${isActive ? "text-white" : "text-white/80"}`}>
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5  bg-white transition-all delay-250 duration-800 group-hover:w-full"></span>
            </Link>
          )})}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="text-white sm:block md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              // Close icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden flex flex-col gap-4 text-white/80 mt-4 bg-darkblue/90 rounded-xl px-6 py-4 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 flex" : "max-h-0 hidden"
        }`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="py-2 border-b border-white/10"
            onClick={() => setIsOpen(false)} // close menu when clicked
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
