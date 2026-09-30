import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../services/api";

const FALLBACK_STROBOSCOPES = [
  {
    slug: "led-handheld-model-stroboscope",
    title: "LED Handheld Model Stroboscope",
  },
  {
    slug: "led-handheld-model-stroboscope-with-lens",
    title: "LED Handheld Model Stroboscope with Lens",
  },
  {
    slug: "xenon-flash-tube-hand-held-stroboscope",
    title: "Xenon Flash Tube Hand Held Stroboscope",
  },
  {
    slug: "u-tube-fixed-model-stroboscope",
    title: "U Tube Fixed Model Stroboscope",
  },
  {
    slug: "xenon-flash-tube-for-stroboscope",
    title: "Xenon Flash Tube for Stroboscope",
  },
  {
    slug: "led-fix-model-stroboscope-iti-400",
    title: "LED Fix Model Stroboscope - ITI 400",
  },
];

const GROUP_WEBSITES = [
  { name: "imagetechindustries.com", url: "https://www.imagetechindustries.com/" },
  { name: "doctorblade.co.in", url: "https://www.doctorblade.co.in" },
  { name: "stroboscopelight.com", url: "https://www.stroboscopelight.com" },
  { name: "barcoater.com", url: "https://www.barcoater.com" },
  { name: "teflondam.com", url: "https://www.teflondam.com" },
  { name: "inkmixingroller.com", url: "https://www.inkmixingroller.com" },
];

const Footer = () => {
  const { data: apiProducts } = useProducts("stroboscopes");

  const productList =
    Array.isArray(apiProducts) && apiProducts.length > 0
      ? apiProducts
      : FALLBACK_STROBOSCOPES;

  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200 pt-16 mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.6fr_0.85fr_1.2fr_1.05fr_1.3fr] gap-8 lg:gap-6 mb-14">
          {/* Column 1: Brand Info & Socials */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="/logo.png"
                  alt="ImageTech Industries Logo"
                  className="h-10 md:h-12 w-auto object-contain"
                  loading="lazy"
                />
              </Link>
            </div>
            <p className="text-sm text-blue-600 font-bold mb-3 tracking-wide">
              Your Satisfaction is our Priority
            </p>
            <p className="text-sm text-gray-700 mb-6 leading-relaxed font-normal">
              ImageTech Industries is a premier manufacturer and global supplier of high-intensity industrial stroboscopes. We engineer precision LED & Xenon flash inspection systems for gravure printing, flexo, slitting, coating, and rotational machinery.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/imagetech-industries/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ImageTech Industries on LinkedIn"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/ImageTechIndustries"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ImageTech Industries on Facebook"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@ImageTechIndustries"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe to ImageTech Industries on YouTube"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/imagetechindustries/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow ImageTech Industries on Instagram"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm mb-4 uppercase tracking-wider relative inline-block pb-1">
              USEFUL LINKS
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-blue-600"></span>
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold text-gray-800">
              <li>
                <Link to="/" className="hover:text-blue-600 flex items-center transition-colors group">
                  <svg className="w-3 h-3 text-blue-600 mr-2 shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 flex items-center transition-colors group">
                  <svg className="w-3 h-3 text-blue-600 mr-2 shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-blue-600 flex items-center transition-colors group">
                  <svg className="w-3 h-3 text-blue-600 mr-2 shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                  Certifications
                </Link>
              </li>
              <li>
                <Link to="/selection-guide" className="hover:text-blue-600 flex items-center transition-colors group">
                  <svg className="w-3 h-3 text-blue-600 mr-2 shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                  Selection & Sizing Guide
                </Link>
              </li>
              <li>
                <Link to="/working-principle" className="hover:text-blue-600 flex items-center transition-colors group">
                  <svg className="w-3 h-3 text-blue-600 mr-2 shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                  Working Principle & Physics
                </Link>
              </li>
              <li>
                <Link to="/press-applications" className="hover:text-blue-600 flex items-center transition-colors group">
                  <svg className="w-3 h-3 text-blue-600 mr-2 shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                  Press Applications
                </Link>
              </li>
              <li>
                <Link to="/troubleshooting-guide" className="hover:text-blue-600 flex items-center transition-colors group">
                  <svg className="w-3 h-3 text-blue-600 mr-2 shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                  Defect Troubleshooting
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-blue-600 flex items-center transition-colors group">
                  <svg className="w-3 h-3 text-blue-600 mr-2 shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                  Sitemap
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 flex items-center transition-colors group">
                  <svg className="w-3 h-3 text-blue-600 mr-2 shrink-0 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Stroboscopes */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm mb-4 uppercase tracking-wider relative inline-block pb-1">
              OUR PRODUCTS
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-blue-600"></span>
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold text-gray-800">
              {productList.map((prod) => (
                <li key={prod.slug}>
                  <Link
                    to={`/products/${prod.slug}`}
                    className="hover:text-blue-600 flex items-start transition-colors group leading-snug"
                  >
                    <svg
                      className="w-3 h-3 text-blue-600 mr-2 mt-1 shrink-0 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>{prod.title || prod.name}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://www.imagetechindustries.com/products?category=stroboscopes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wide gap-1 group"
                >
                  <span>View All on ImageTech</span>
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Group Websites */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm mb-4 uppercase tracking-wider relative inline-block pb-1">
              OUR WEBSITES
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-blue-600"></span>
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold text-gray-800">
              {GROUP_WEBSITES.map((site) => (
                <li key={site.name}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 flex items-center transition-colors group"
                  >
                    <svg
                      className="w-3 h-3 text-blue-600 mr-2 shrink-0 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="truncate">{site.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Quick Contacts */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm mb-4 uppercase tracking-wider relative inline-block pb-1">
              QUICK CONTACTS
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-blue-600"></span>
            </h4>
            <div className="space-y-4 text-sm font-semibold text-gray-800">
              {/* Phone Numbers */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mr-3 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col space-y-1">
                  <a href="tel:+918448336036" className="hover:text-blue-600 transition-colors">
                    +91 8448336036
                  </a>
                  <a href="tel:+918851016580" className="hover:text-blue-600 transition-colors">
                    +91 8851016580
                  </a>
                  <a href="tel:+918448441345" className="hover:text-blue-600 transition-colors">
                    +91 8448441345
                  </a>
                </div>
              </div>

              {/* Email Addresses */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mr-3 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col space-y-1">
                  <a
                    href="mailto:imagetechindustries@gmail.com"
                    className="hover:text-blue-600 transition-colors break-all"
                  >
                    imagetechindustries@gmail.com
                  </a>
                  <a
                    href="mailto:sales.imagetechindustries@gmail.com"
                    className="hover:text-blue-600 transition-colors break-all"
                  >
                    sales.imagetechindustries@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mr-3 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-xs leading-relaxed uppercase text-gray-700 font-semibold">
                  RZ-I-13, 2ND FLOOR, NANDA BLOCK, MAHAVIR ENCLAVE, DELHI - 110045, INDIA
                </span>
              </div>
            </div>
          </div>
        </div>


        {/* Middle Section: Features Card */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200/80 p-6 lg:p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mr-4 shrink-0 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-sm mb-1">
                  Premium Quality
                </h5>
                <p className="text-xs text-gray-600 leading-snug">
                  Manufactured to exacting ISO & CE industrial inspection standards
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mr-4 shrink-0 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-sm mb-1">
                  Precision Engineering
                </h5>
                <p className="text-xs text-gray-600 leading-snug">
                  Microsecond flash duration for sharp freeze-motion imagery
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mr-4 shrink-0 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-sm mb-1">
                  Technical Support
                </h5>
                <p className="text-xs text-gray-600 leading-snug">
                  Expert optical & application guidance from engineering specialists
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mr-4 shrink-0 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-sm mb-1">
                  Global Reach
                </h5>
                <p className="text-xs text-gray-600 leading-snug">
                  Serving flexo, gravure, and converting clients worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-gray-200 bg-gray-50/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs font-semibold text-gray-600">
          <p>© {new Date().getFullYear()} ImageTech Industries. All rights reserved.</p>
          <div className="flex flex-wrap items-center space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-blue-600 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/shipping-policy" className="hover:text-blue-600 transition-colors">
              Shipping Policy
            </Link>
            <Link to="/sitemap" className="hover:text-blue-600 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
