import React from "react";
import { Link } from "react-router-dom";

const defects = [
  {
    code: "Defect 01",
    name: "Doctor Blade Streak",
    symptom: "A thin, straight hairline line of ink runs down the entire length of the printed film.",
    cause: "A tiny speck of dried ink or a microscopic metallic blade nick is trapping ink behind the blade.",
    action: "Oscillate the blade holder, gently wipe the blade edge with a clean lint-free cloth, or replace the blade.",
    color: "amber",
  },
  {
    code: "Defect 02",
    name: "Color Registration Drift",
    symptom: "Printed colors are slipping out of place, making text blurry or leaving white gaps between colors.",
    cause: "Web tension is fluctuating, or the film is slipping over greasy idler rollers during machine acceleration.",
    action: "Check the infeed dancer roll tension; ensure compensator roller bearings are running smoothly without drag.",
    color: "rose",
  },
  {
    code: "Defect 03",
    name: "Gear Chatter Banding",
    symptom: "Repeating light and dark horizontal stripes appear across the entire width of the print.",
    cause: "Cylinder drive gears have backlash wear or dirt between teeth, causing tiny cylinder vibrations.",
    action: "Clean gear teeth thoroughly, check gear mesh backlash, and inspect cylinder journal bearings for play.",
    color: "purple",
  },
  {
    code: "Defect 04",
    name: "Web Flutter Blur",
    symptom: "The printed film shakes or ripples violently under the strobe light, making inspection blurry.",
    cause: "Excessive air nozzle pressure in the drying hood or an unbalanced free-running idler roller.",
    action: "Lower drying hood air blower velocity and balance or replace sluggish guide roller bearings.",
    color: "blue",
  },
];

export default function HomeTroubleshootingFinder() {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unified Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h4 className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3">
            Defect Quick-Finder & Diagnostics
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            See a Problem on Your Running Web? <span className="text-blue-600">Here is the Fix</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            When your running film or paper shows print defects under the stroboscope light, match what you see below to immediately identify the machine fault and fix it before wasting a single master roll.
          </p>
        </div>

        {/* 4 Defect Diagnostic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {defects.map((d, idx) => (
            <div
              key={idx}
              className="bg-gray-50/80 rounded-3xl p-6 sm:p-8 border border-gray-200/90 hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {d.code}
                  </span>
                  <span className="text-xs font-bold text-gray-400">
                    Visual Diagnostic
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {d.name}
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="bg-white p-3.5 rounded-2xl border border-gray-100">
                    <span className="font-bold text-gray-900 block mb-0.5">
                      👁️ What You See:
                    </span>
                    <span className="text-gray-600 leading-relaxed">
                      {d.symptom}
                    </span>
                  </div>

                  <div className="bg-white p-3.5 rounded-2xl border border-gray-100">
                    <span className="font-bold text-rose-700 block mb-0.5">
                      ⚙️ Root Machine Cause:
                    </span>
                    <span className="text-gray-600 leading-relaxed">
                      {d.cause}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-200/80 bg-blue-50/50 p-3.5 rounded-2xl border border-blue-100/60">
                <span className="text-xs font-black uppercase tracking-wider text-blue-900 block mb-0.5">
                  ✅ Instant Operator Fix:
                </span>
                <p className="text-xs font-semibold text-blue-800 leading-relaxed">
                  {d.action}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Maintenance Best Practices */}
        <div className="bg-gray-50 border border-gray-200/90 rounded-3xl p-6 sm:p-10 mb-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-blue-600 mb-2">
              Preventative Care SOP
            </h4>
            <h3 className="text-2xl font-bold text-gray-900">
              3 Daily Habits to Make Your Stroboscope Last 5+ Years
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-black flex items-center justify-center text-sm mb-3">
                1
              </div>
              <h5 className="font-bold text-base text-gray-900 mb-2">
                Clean Lens with Microfiber
              </h5>
              <p className="text-xs text-gray-600 leading-relaxed">
                Wipe away ink mist with an optical cloth. <strong>Never use chemical solvent thinners</strong> (like ethyl acetate or MEK)—they will melt the acrylic plastic lens cloudy white!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-black flex items-center justify-center text-sm mb-3">
                2
              </div>
              <h5 className="font-bold text-base text-gray-900 mb-2">
                Recharge Battery at 15–20%
              </h5>
              <p className="text-xs text-gray-600 leading-relaxed">
                For handheld LED models, plug them in after each shift before the battery drops below 15%. This keeps the lithium battery healthy and running strong for 5+ years.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-black flex items-center justify-center text-sm mb-3">
                3
              </div>
              <h5 className="font-bold text-base text-gray-900 mb-2">
                100M Flash Xenon Lifespan
              </h5>
              <p className="text-xs text-gray-600 leading-relaxed">
                Xenon bulbs last roughly 100 million flashes. When the tube ends turn silver-black, contact ImageTech for a genuine plug-and-play original replacement tube.
              </p>
            </div>
          </div>
        </div>

        {/* Link to Full Troubleshooting Guide */}
        <div className="text-center">
          <Link
            to="/troubleshooting-guide"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl text-sm transition-all shadow-md shadow-blue-500/20 hover:shadow-lg"
          >
            <span>Open Complete Pressroom Troubleshooting Guide</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
