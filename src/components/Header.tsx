import { useState } from "react";
import logo from "../assets/images/t&j-logo-cropped.jpg";
import Button from "./Button";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        id="header"
        className="fixed top-0 left-0 w-full z-50 bg-background"
      >
        <div className="container m-auto flex justify-between items-center p-3 md:p-0">
          {/* Logo */}
          <div className="name-logo md:w-[20%]">
            <a href="#" className="logo relative flex w-20">
              <img src={logo} alt="logo" className="" />
              <span></span>
            </a>
          </div>

          {/* Hamburger Button */}
          <div
            id="menu-btn"
            className={`hamburger md:hidden w-6 h-6 block cursor-pointer focus:outline-none ${
              menuOpen ? "open" : ""
            }`}
            onClick={handleMenuToggle}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </div>

          {/* Navigation Menu for Mobile */}
          <div
            id="menu"
            className={`mobile-nav-menu absolute mt-78 w-full right-0 px-3 flex-col items-center justify-center border-t-border text-center bg-background ${
              menuOpen ? "flex" : "hidden"
            }`}
            onClick={handleMenuToggle}
          >
            <a
              href="#"
              className="destinations px-5 py-3 border-t-2 border-t-border w-full md:py-7 md:px-5 font-semibold text-brand hover:text-muted text-center"
            >
              Destinations
            </a>
            <a
              href="#"
              className="about px-5 py-3 border-t-1 border-t-border w-full md:py-7 md:px-5 font-semibold text-brand hover:text-muted text-center"
            >
              About Us
            </a>
            <a
              href="#"
              className="blog px-5 py-3 border-t-1 border-t-border w-full md:py-7 md:px-5 font-semibold text-brand hover:text-muted text-center"
            >
              Blog
            </a>
            <a
              href="#"
              className="booking px-5 py-3 border-t-1 border-t-border w-full md:py-7 md:px-5 font-semibold text-brand hover:text-muted text-center"
            >
              Booking A Meeting
            </a>
            <a
              href="#"
              className="contact px-5 py-3 border-t-1 border-t-border w-full md:py-7 md:px-5 font-semibold text-brand hover:text-muted text-center"
            >
              Contact Us
            </a>
          </div>

          {/* PC Navigation Menu */}
          <div className="desktop-nav-menu hidden md:flex md:justify-between ">
            <a
              href="#"
              id="destinations"
              className="destinations px-5 py-3 md:py-7 md:px-5 font-semibold text-brand hover:text-muted"
            >
              Destinations
            </a>
            <a
              href="#"
              id="about"
              className="about px-5 py-3 md:py-7 md:px-5 font-semibold text-brand hover:text-muted"
            >
              About Us
            </a>
            <a
              href="#"
              id="blog"
              className="blog px-5 py-3 md:py-7 md:px-5 font-semibold text-brand hover:text-muted"
            >
              Blog
            </a>
            <a
              href="#"
              id="booking"
              className="booking px-5 py-3 md:py-7 md:px-5 font-semibold text-brand hover:text-muted"
            >
              Booking A Meeting
            </a>
            <a
              href="#"
              id="contact"
              className="contact px-5 py-3 md:py-7 md:px-5 font-semibold text-brand hover:text-muted"
            >
              Contact Us
            </a>
          </div>

          {/* Other Nav Items */}
          <div className="hidden md:flex md:items-center md:justify-end md:gap-10 md:w-[20%]">
            <div className="language relative">
              <button
                type="button"
                className="flex items-center px-2 py-1 rounded hover:bg-muted focus:outline-none"
              >
                EN
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul className="absolute right-0 mt-2 w-24 bg-white border rounded shadow-lg z-10 hidden group-hover:block">
                <li>
                  <button className="block w-full text-left px-4 py-2 hover:bg-muted">
                    EN
                  </button>
                </li>
                <li>
                  <button className="block w-full text-left px-4 py-2 hover:bg-muted">
                    FR
                  </button>
                </li>
                <li>
                  <button className="block w-full text-left px-4 py-2 hover:bg-muted">
                    ES
                  </button>
                </li>
              </ul>
            </div>
            <div className="button">
              <Button type="button" variant="primary" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>
      {/* Spacer to prevent content from being hidden behind the fixed header */}
      <div className="h-17 md:h-20 bg-brand"></div>
    </>
  );
}

export default Header;
