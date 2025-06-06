import { useState } from "react";
import logo from "../assets/images/t&j-logo-cropped.jpg";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Destinations", path: "/destinations" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Blog", path: "/blog" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-background shadow">
        <div className="container m-auto flex justify-between items-center p-3 md:p-0">
          {/* Logo */}
          <div className="name-logo md:w-[20%]">
            <Link to="/" className="logo relative flex w-20" onClick={closeMenu}>
              <img src={logo} alt="T&J Logo" className="w-full h-auto" />
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            id="menu-btn"
            aria-label="Toggle menu"
            className={`hamburger md:hidden w-6 h-6 block cursor-pointer focus:outline-none ${
              menuOpen ? "open" : ""
            }`}
            onClick={handleMenuToggle}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>

          {/* Mobile Navigation */}
          <nav
            id="menu"
            className={`mobile-nav-menu absolute top-full left-0 w-full px-3 flex-col items-center justify-center border-t border-border text-center bg-background transition-all duration-200 ${
              menuOpen ? "flex" : "hidden"
            } md:hidden`}
            onClick={closeMenu}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-5 py-3 border-t border-border w-full font-semibold text-brand hover:text-secondary ${
                  location.pathname === item.path ? "text-secondary" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="py-3">
              <Button type="button" variant="primary" size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </nav>

          {/* Desktop Navigation */}
          <nav className="desktop-nav-menu hidden md:flex md:justify-between md:items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-5 py-3 md:py-7 font-semibold text-brand hover:text-secondary transition-colors ${
                  location.pathname === item.path ? "text-secondary" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side: Language & CTA */}
          <div className="hidden md:flex md:items-center md:justify-end md:gap-10 md:w-[20%]">
            {/* Language Switcher */}
            <div className="language relative group">
              <button
                type="button"
                className="flex items-center text-brand px-2 py-1 rounded hover:bg-muted hover:text-secondary focus:outline-none"
              >
                EN
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-lg z-10 hidden group-hover:block">
                <li>
                  <button className="block w-full text-left px-4 py-2 hover:bg-muted">EN</button>
                </li>
                <li>
                  <button className="block w-full text-left px-4 py-2 hover:bg-muted">FR</button>
                </li>
                <li>
                  <button className="block w-full text-left px-4 py-2 hover:bg-muted">ES</button>
                </li>
              </ul>
            </div>
            <Button type="button" variant="primary" size="sm" className="ml-2">
              Get Started
            </Button>
          </div>
        </div>
      </header>
      {/* Spacer to prevent content from being hidden behind the fixed header */}
      <div className="h-17 md:h-20"></div>
    </>
  );
}

export default Header;
