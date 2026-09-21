import React from "react";
import { Link } from "react-router-dom";

export default function HomeWorkingPrinciple() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unified Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h4 className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3">
            How Stroboscopes Work
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            How a Flashing Light Freezes <span className="text-blue-600">High-Speed Motion</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Have you ever wondered how an operator inspects printing film running at 400 meters per minute without stopping the press? It is not magic—it is simple optical science. Here is how it works in 3 easy steps.
          </p>
        </div>

        {/* 3 Core Scientific Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {/* Card 1: Persistence of Vision */}
          <div className="bg-gray-50/80 rounded-3xl p-6 sm:p-8 border border-gray-200/80 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Persistence of Vision
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Think of a cartoon flipbook. The human eye holds an image on the retina for about <strong>one-tenth of a second</strong>. When our strobe light flashes at the exact same point in every cylinder turn, your brain connects those separate flashes into a single, crystal-clear, stationary picture.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200/80">
              <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-3 py-1 rounded-full inline-block">
                Benefit: Safe, effortless inspection without eye strain
              </span>
            </div>
          </div>

          {/* Card 2: Microsecond Flash */}
          <div className="bg-gray-50/80 rounded-3xl p-6 sm:p-8 border border-gray-200/80 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Microsecond Flash Durations
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Standard factory lights shine continuously, causing moving webs to smear across your eyes. Our stroboscopes emit ultra-short bursts of light lasting only <strong>1 to 5 microseconds</strong> (0.000005 seconds). During that tiny instant, the web moves less than 0.02 mm—freezing it razor sharp!
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200/80">
              <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-3 py-1 rounded-full inline-block">
                Benefit: Razor-sharp focus on fine print dots & barcodes
              </span>
            </div>
          </div>

          {/* Card 3: The 1X True Speed Rule */}
          <div className="bg-gray-50/80 rounded-3xl p-6 sm:p-8 border border-gray-200/80 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-black text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                The 1X True Speed Rule
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                A moving shaft can also look frozen at twice its actual speed (2X) showing double marks, or at half-speed (0.5X). To find the true machine speed, always start flashing from a high frequency and turn the dial down until you see <strong>exactly one clear mark</strong>. That is your real speed.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200/80">
              <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-3 py-1 rounded-full inline-block">
                Benefit: 100% accurate RPM speed check without contact
              </span>
            </div>
          </div>
        </div>

        {/* Slow Motion Inspection Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-blue-100 text-xs font-bold uppercase tracking-wider mb-3">
              <span>⚡</span> Operator Secret
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-2">
              Want to see your press in slow motion?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              If your machine runs at 3,000 RPM, just set the stroboscope to 2,998 FPM. Each flash catches the part slightly further along, making the machine appear to crawl forward in super slow motion. Perfect for diagnosing vibrating gears and blade flutter!
            </p>
          </div>
          <Link
            to="/working-principle"
            className="shrink-0 bg-white text-blue-700 hover:bg-blue-50 font-extrabold py-3.5 px-8 rounded-xl text-sm transition-all shadow-lg shadow-black/10 hover:shadow-xl"
          >
            Explore Complete Physics Guide &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
