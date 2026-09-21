import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const technicalGuides = [
  { name: "Selection & Sizing Guide", href: "/selection-guide", desc: "Interactive formula calculator & sizing matrix" },
  { name: "Working Principle & Physics", href: "/working-principle", desc: "Persistence of vision & harmonic trap" },
  { name: "Press & Industrial Applications", href: "/press-applications", desc: "Flexo, gravure, slitting & converting" },
  { name: "Defect Troubleshooting Guide", href: "/troubleshooting-guide", desc: "Visual Quick-Finder & maintenance SOP" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const [mobileGuidesOpen, setMobileGuidesOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Certifications", href: "/certifications" },
    { name: "Sitemap", href: "/sitemap" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href) || location.hash === href;
  };

  const isGuidesActive = technicalGuides.some((g) => location.pathname === g.href);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="https://www.imagetechindustries.com"
              className="flex items-center"
            >
              <img
                src="/logo.png"
                alt="ImageTech Industries Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center space-x-1 lg:space-x-2">
            <Link
              to="/"
              className={`flex items-center px-3 py-2 text-sm font-semibold rounded-md transition-colors ${isActive("/") ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-900 font-bold hover:text-blue-600"}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`flex items-center px-3 py-2 text-sm font-semibold rounded-md transition-colors ${isActive("/about") ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-900 font-bold hover:text-blue-600"}`}
            >
              About Us
            </Link>
            <Link
              to="/certifications"
              className={`flex items-center px-3 py-2 text-sm font-semibold rounded-md transition-colors ${isActive("/certifications") ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-900 font-bold hover:text-blue-600"}`}
            >
              Certifications
            </Link>

            {/* Technical Guides Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGuidesOpen(true)}
              onMouseLeave={() => setGuidesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setGuidesOpen(!guidesOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                  isGuidesActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-900 font-bold hover:text-blue-600"
                }`}
              >
                <span>Technical Guides</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${guidesOpen ? "rotate-180 text-blue-600" : "text-gray-500"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {guidesOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-200 py-3 z-50 animate-fadeIn">
                  <div className="px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-blue-600 border-b border-slate-100 mb-1">
                    Engineering Knowledge Suite
                  </div>
                  {technicalGuides.map((guide, idx) => (
                    <Link
                      key={idx}
                      to={guide.href}
                      onClick={() => setGuidesOpen(false)}
                      className={`block px-4 py-2.5 hover:bg-blue-50 transition-colors ${
                        location.pathname === guide.href ? "bg-blue-50/70" : ""
                      }`}
                    >
                      <div className="text-sm font-bold text-slate-900 hover:text-blue-600">
                        {guide.name}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">
                        {guide.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/sitemap"
              className={`flex items-center px-3 py-2 text-sm font-semibold rounded-md transition-colors ${isActive("/sitemap") ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-900 font-bold hover:text-blue-600"}`}
            >
              Sitemap
            </Link>
            <Link
              to="/contact"
              className={`flex items-center px-3 py-2 text-sm font-semibold rounded-md transition-colors ${isActive("/contact") ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-900 font-bold hover:text-blue-600"}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-quote-modal"))
              }
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 flex items-center"
            >
              Get A Quote
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-gray-900 focus:outline-none p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-semibold ${isActive("/") ? "text-blue-600 bg-blue-50" : "text-gray-900 font-bold hover:text-blue-600 hover:bg-gray-50"}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-semibold ${isActive("/about") ? "text-blue-600 bg-blue-50" : "text-gray-900 font-bold hover:text-blue-600 hover:bg-gray-50"}`}
            >
              About Us
            </Link>
            <Link
              to="/certifications"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-semibold ${isActive("/certifications") ? "text-blue-600 bg-blue-50" : "text-gray-900 font-bold hover:text-blue-600 hover:bg-gray-50"}`}
            >
              Certifications
            </Link>

            {/* Mobile Technical Guides Accordion */}
            <div className="border-y border-slate-100 py-1">
              <button
                type="button"
                onClick={() => setMobileGuidesOpen(!mobileGuidesOpen)}
                className="w-full flex justify-between items-center px-3 py-3 rounded-md text-base font-bold text-gray-900 hover:text-blue-600 hover:bg-gray-50"
              >
                <span className={isGuidesActive ? "text-blue-600 font-black" : ""}>
                  Technical Guides
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileGuidesOpen ? "rotate-180 text-blue-600" : "text-gray-500"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {mobileGuidesOpen && (
                <div className="pl-4 pr-2 pb-2 space-y-1">
                  {technicalGuides.map((guide, idx) => (
                    <Link
                      key={idx}
                      to={guide.href}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileGuidesOpen(false);
                      }}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                        location.pathname === guide.href
                          ? "bg-blue-50 text-blue-600 font-bold"
                          : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                      }`}
                    >
                      {guide.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/sitemap"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-semibold ${isActive("/sitemap") ? "text-blue-600 bg-blue-50" : "text-gray-900 font-bold hover:text-blue-600 hover:bg-gray-50"}`}
            >
              Sitemap
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-semibold ${isActive("/contact") ? "text-blue-600 bg-blue-50" : "text-gray-900 font-bold hover:text-blue-600 hover:bg-gray-50"}`}
            >
              Contact Us
            </Link>
            <div className="pt-4 mt-2 border-t border-gray-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  window.dispatchEvent(new CustomEvent("open-quote-modal"));
                }}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center"
              >
                Get A Quote
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
