import React from "react";
import { Link } from "react-router-dom";

const sectors = [
  {
    title: "Flexible Packaging & Pouches",
    subtitle: "Rotogravure & Film Printing",
    desc: "Inspect multi-color registration crosses, ink drying, and hairline blade streaks across high-speed BOPP, PET, and polythene films without slowing the press.",
    model: "U-Tube Fixed ITI-1000",
    badge: "Wide Web Printing",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Flexographic Labels & Stickers",
    subtitle: "Narrow-Web Label Converters",
    desc: "Verify fine halftone dots, color trapping, and plate tape lifting at 150 m/min. The magnifying lens model lets operators zoom into micro registration marks effortlessly.",
    model: "LED Handheld with Lens",
    badge: "Micro Detail Checking",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
  },
  {
    title: "Slitter Rewinders & Converting",
    subtitle: "High-Speed Film Slitting",
    desc: "Catch dull razor knife burrs, wavy slitting cuts, and winding roll tension flutter before 2,000 meters of customer reels are damaged.",
    model: "U-Tube Fixed ITI-700",
    badge: "Slit Edge Inspection",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
  },
  {
    title: "Coating & Solventless Lamination",
    subtitle: "Adhesive & Barrier Film Lines",
    desc: "Spot adhesive voids, dry patches, glue streaks, and trapped micro air bubbles across lamination nips to guarantee 100% bond strength.",
    model: "Xenon Flash Tube Handheld",
    badge: "Bond Integrity",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Textile Spinning & Ring Frames",
    subtitle: "Yarn & Spindle Mills",
    desc: "Freeze ring travelers spinning at 20,000 RPM in mid-air. Monitor yarn ballooning stability and traveler tilt without touching delicate filaments.",
    model: "LED Handheld Model 1",
    badge: "20,000+ RPM Spindles",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Motors, Fans & Machine Diagnostics",
    subtitle: "Plant Maintenance & Vibration",
    desc: "Safely check motor RPM, loose belt slippage, cooling tower fan imbalance, and gear chatter from a safe distance outside machine guards.",
    model: "LED Handheld Model 1",
    badge: "Non-Contact Tachometer",
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      </svg>
    ),
  },
];

export default function HomePressApplications() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unified Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h4 className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3">
            Where Stroboscopes Are Used
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Industrial Applications & <span className="text-blue-600">Manufacturing Sectors</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            From flexible packaging presses running at 500 m/min to non-contact motor RPM diagnostics, see how ImageTech stroboscopes help factories eliminate scrap across 6 vital industries.
          </p>
        </div>

        {/* 6 Sector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                    {sector.icon}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {sector.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {sector.title}
                </h3>
                <p className="text-xs font-semibold text-blue-600 mb-3">
                  {sector.subtitle}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {sector.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-semibold">
                  Standard Model:
                </span>
                <span className="text-xs font-black text-gray-900">
                  {sector.model}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Operator Glare Tip Box */}
        <div className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-2xl shrink-0">
              💡
            </div>
            <div>
              <h4 className="text-base font-bold text-gray-900 mb-1">
                Pressroom Operator Rule: How to Inspect Shiny Foil Without Glare
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl">
                Never shine a strobe light straight-on (90 degrees) onto aluminum foil or shiny metallized film—it will bounce right into your eyes! Simply angle the strobe at <strong>40° to 45°</strong> relative to the web. The blinding glare bounces away, making printed inks and barcodes pop with crystal-clear contrast.
              </p>
            </div>
          </div>
          <Link
            to="/press-applications"
            className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-blue-500/20 hover:shadow-lg"
          >
            All 6 Sector Guides &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
