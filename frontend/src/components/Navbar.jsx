import { useState } from "react";
import { NavLink } from "react-router";
import {
  FaSearch,
  FaMoon,
  FaSun,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `font-bold transition-colors duration-200 ${
      isActive
        ? "text-primary"
        : "text-black hover:text-primary"
    }`;

  const dropdownItem =
    "block px-6 py-3 font-semibold whitespace-nowrap hover:text-primary hover:bg-gray-50 transition";

  return (
    <nav className="navbar w-full bg-white shadow-sm relative z-50">

      <div className="max-w-7xl mx-auto h-24 px-6 flex items-center justify-between">

        {/* Logo */}

        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          <h1 className="great-vibes text-5xl logo">
            Tours
          </h1>
        </NavLink>

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-center gap-7">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink to="/tours" className={navClass}>
            Tours
          </NavLink>

          {/* Blog */}

          <div className="relative group">

            <button
              type="button"
              className="flex items-center gap-1 font-bold nav-text hover:text-primary transition"
            >
              Blog
              <FaChevronDown className="text-[10px]" />
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">

              <div className="bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden min-w-[270px]">

                <NavLink
                  to="/blog/right-sidebar"
                  className={dropdownItem}
                >
                  Blog with right sidebar
                </NavLink>

                <NavLink
                  to="/blog/left-sidebar"
                  className={dropdownItem}
                >
                  Blog with left sidebar
                </NavLink>

                <NavLink
                  to="/blog/no-sidebar"
                  className={dropdownItem}
                >
                  Blog without sidebar
                </NavLink>

              </div>

            </div>

          </div>

          {/* Pages */}

          <div className="relative group">

            <button
              type="button"
              className="flex items-center gap-1 font-bold nav-text hover:text-primary transition"
            >
              Pages
              <FaChevronDown className="text-[10px]" />
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">

              <div className="bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden min-w-[180px]">

                <NavLink
                  to="/pages/404"
                  className={dropdownItem}
                >
                  404 Page
                </NavLink>

              </div>

            </div>

          </div>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>

          {/* Search */}

          <div className="flex items-center ml-2">

            <input
              type="text"
              placeholder="Enter Keyword..."
              className="w-64 h-11 px-4 border border-gray-200 rounded-l-full outline-none"
            />

            <button
              type="button"
              className="h-11 w-12 bg-primary text-white rounded-r-full flex items-center justify-center hover:bg-blue-700 transition"
            >
              <FaSearch />
            </button>

          </div>

          {/* Theme */}

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="theme-button text-xl hover:text-primary transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

        </div>

        {/* Mobile Buttons */}

        <div className="flex lg:hidden items-center gap-4">

          {/* Theme */}

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className="theme-button text-xl hover:text-primary transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Menu */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-11 h-11 bg-primary text-white rounded-md flex items-center justify-center text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">

          <div className="px-6 py-8 flex flex-col items-center gap-7">

            {/* Home */}

            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={navClass}
            >
              Home
            </NavLink>

            {/* About */}

            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={navClass}
            >
              About
            </NavLink>

            {/* Tours */}

            <NavLink
              to="/tours"
              onClick={() => setMenuOpen(false)}
              className={navClass}
            >
              Tours
            </NavLink>

            {/* Blog */}

            <div className="flex flex-col items-center">

              <button
                type="button"
                onClick={() => setBlogOpen(!blogOpen)}
                className="flex items-center gap-1 font-bold text-black hover:text-primary"
              >
                Blog
                <FaChevronDown
                  className={`text-[10px] transition-transform ${
                    blogOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {blogOpen && (
                <div className="flex flex-col items-center gap-4 mt-5">

                  <NavLink
                    to="/blog/right-sidebar"
                    onClick={() => setMenuOpen(false)}
                    className="font-semibold hover:text-primary"
                  >
                    Right Sidebar
                  </NavLink>

                  <NavLink
                    to="/blog/left-sidebar"
                    onClick={() => setMenuOpen(false)}
                    className="font-semibold hover:text-primary"
                  >
                    Left Sidebar
                  </NavLink>

                  <NavLink
                    to="/blog/no-sidebar"
                    onClick={() => setMenuOpen(false)}
                    className="font-semibold hover:text-primary"
                  >
                    No Sidebar
                  </NavLink>

                </div>
              )}

            </div>

            {/* Pages */}

            <div className="flex flex-col items-center">

              <button
                type="button"
                onClick={() => setPagesOpen(!pagesOpen)}
                className="flex items-center gap-1 font-bold text-black hover:text-primary"
              >
                Pages
                <FaChevronDown
                  className={`text-[10px] transition-transform ${
                    pagesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {pagesOpen && (
                <div className="flex flex-col items-center gap-4 mt-5">

                  <NavLink
                    to="/pages/404"
                    onClick={() => setMenuOpen(false)}
                    className="font-semibold hover:text-primary"
                  >
                    404 Page
                  </NavLink>

                </div>
              )}

            </div>

            {/* Contact */}

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={navClass}
            >
              Contact
            </NavLink>

            {/* Search */}

            <div className="flex w-full max-w-md mt-2">

              <input
                type="text"
                placeholder="Enter Keyword..."
                className="flex-1 h-11 px-4 border border-gray-200 rounded-l-full outline-none"
              />

              <button
                type="button"
                className="h-11 w-12 bg-primary text-white rounded-r-full flex items-center justify-center"
              >
                <FaSearch />
              </button>

            </div>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;