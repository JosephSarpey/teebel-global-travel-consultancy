import logo from "../assets/images/t&j-logo-cropped.jpg";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center" id="header">
        {/* Logo */}
        <div className="name-logo w-[20%]">
          <a href="#" className="logo flex">
            <img src={logo} alt="logo" className="w-20" />
            <span></span>
          </a>
        </div>

        {/* Navigation Menu */}
        <div className="nav-menu flex justify-between">
          <a
            href="#"
            id="destinations"
            className="destinations py-7 px-5 font-semibold text-brand hover:text-muted hover:bg-secondary"
          >
            Destinations
          </a>
          <a
            href="#"
            id="about"
            className="about py-7 px-5 font-semibold text-brand hover:text-muted hover:bg-secondary"
          >
            About Us
          </a>
          <a
            href="#"
            id="blog"
            className="blog py-7 px-5 font-semibold text-brand hover:text-muted hover:bg-secondary"
          >
            Blog
          </a>
          <a
            href="#"
            id="booking"
            className="booking py-7 px-5 font-semibold text-brand hover:text-muted hover:bg-secondary"
          >
            Booking A Meeting
          </a>
          <a
            href="#"
            id="contact"
            className="contact py-7 px-5 font-semibold text-brand hover:text-muted hover:bg-secondary"
          >
            Contact Us
          </a>
        </div>

        {/* Other Nav Items */}
        <div className="flex items-center justify-end gap-10 w-[20%]">
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
            <button
              type="button"
              className="text-white bg-brand text-sm rounded-2xl px-3 py-2 flex justify-center items-center hover:text-accent"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
