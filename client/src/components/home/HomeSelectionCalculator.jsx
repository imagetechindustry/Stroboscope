import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HomeSelectionCalculator() {
  const [webWidth, setWebWidth] = useState(800);
  const [lineSpeed, setLineSpeed] = useState(250);
  const [repeatLength, setRepeatLength] = useState(500);

  const calculatedFPM = repeatLength > 0 ? Math.round((lineSpeed * 1000) / repeatLength) : 0;
  const calculatedHz = Math.round((calculatedFPM / 60) * 10) / 10;

  let modelName = "";
  let modelBadge = "";
  let modelLink = "";
  let modelReason = "";

  if (webWidth <= 350) {
    modelName = "U-Tube Fixed Model ITI-250";
    modelBadge = "Narrow Web (Up to 350 mm)";
    modelLink = "/products/u-tube-fixed-model-stroboscope";
    modelReason = "Compact machine-mounted strobe ideal for narrow label presses, tape slitting, and small packaging lines.";
  } else if (webWidth <= 800) {
    modelName = "U-Tube Fixed Model ITI-700";
    modelBadge = "Standard Packaging (Up to 800 mm)";
    modelLink = "/products/u-tube-fixed-model-stroboscope";
    modelReason = "Best-selling model for flexible packaging, standard gravure presses, and dry lamination machines.";
  } else if (webWidth <= 1100) {
    modelName = "U-Tube Fixed Model ITI-1000";
    modelBadge = "Wide Web Gravure (Up to 1100 mm)";
    modelLink = "/products/u-tube-fixed-model-stroboscope";
    modelReason = "Heavy-duty full-width lighting engineered for high-speed rotogravure presses and film extruders.";
  } else {
    modelName = "U-Tube Fixed Model ITI-1300";
    modelBadge = "Extra Wide Web (Up to 1300 mm)";
    modelLink = "/products/u-tube-fixed-model-stroboscope";
    modelReason = "Our widest synchronized industrial stroboscope built for master slitter rewinders and paper mills.";
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unified Section Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <h4 className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3">
            Interactive Sizing Tool
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Find the Right Stroboscope <span className="text-blue-600">in Seconds</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Every machine runs at a different speed and width. Move the simple sliders below to enter your line details—our tool immediately calculates your required flash rate and recommends the best model.
          </p>
        </div>

        {/* Premium Calculator Card */}
        <div className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Sliders Input Area */}
            <div className="lg:col-span-7 space-y-7">
              {/* Slider 1: Web Width */}
              <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
                    1. Machine Web Width
                  </label>
                  <span className="text-sm font-black text-blue-600 bg-white px-2.5 py-1 rounded-lg border border-gray-200 shadow-xs">
                    {webWidth} mm
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  The maximum usable width of your paper, film, or foil roll.
                </p>
                <input
                  type="range"
                  min="200"
                  max="1500"
                  step="50"
                  value={webWidth}
                  onChange={(e) => setWebWidth(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-2 bg-gray-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] font-semibold text-gray-400 mt-2">
                  <span>Narrow (200 mm)</span>
                  <span>Standard (800 mm)</span>
                  <span>Extra Wide (1500 mm)</span>
                </div>
              </div>

              {/* Slider 2: Line Speed */}
              <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
                    2. Operating Line Speed
                  </label>
                  <span className="text-sm font-black text-blue-600 bg-white px-2.5 py-1 rounded-lg border border-gray-200 shadow-xs">
                    {lineSpeed} m/min
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  How fast your press or slitter runs in meters per minute.
                </p>
                <input
                  type="range"
                  min="30"
                  max="600"
                  step="10"
                  value={lineSpeed}
                  onChange={(e) => setLineSpeed(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-2 bg-gray-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] font-semibold text-gray-400 mt-2">
                  <span>Slow (30 m/min)</span>
                  <span>Production (250 m/min)</span>
                  <span>Ultra-Fast (600 m/min)</span>
                </div>
              </div>

              {/* Slider 3: Cylinder Repeat */}
              <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
                    3. Cylinder Print Repeat Length
                  </label>
                  <span className="text-sm font-black text-blue-600 bg-white px-2.5 py-1 rounded-lg border border-gray-200 shadow-xs">
                    {repeatLength} mm
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-3">
                  The length of one full printed pouch design or impression.
                </p>
                <input
                  type="range"
                  min="200"
                  max="1200"
                  step="25"
                  value={repeatLength}
                  onChange={(e) => setRepeatLength(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer h-2 bg-gray-200 rounded-lg"
                />
                <div className="flex justify-between text-[11px] font-semibold text-gray-400 mt-2">
                  <span>Small Pouch (200 mm)</span>
                  <span>Medium (500 mm)</span>
                  <span>Large Bag (1200 mm)</span>
                </div>
              </div>
            </div>

            {/* Results & Recommendation Output Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-50/80 to-indigo-50/40 rounded-3xl p-6 sm:p-8 border border-blue-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white px-3 py-1 rounded-full border border-blue-200/80">
                    Live Calculation
                  </span>
                  <span className="text-xs font-bold text-gray-500">
                    Zero Motion Blur
                  </span>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-blue-100 mb-6 shadow-xs">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
                    Required Flash Rate
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-blue-600">
                      {calculatedFPM.toLocaleString()}
                    </span>
                    <span className="text-base font-extrabold text-gray-800">
                      FPM (Flashes/min)
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 font-medium">
                    That is equivalent to <strong>{calculatedHz} flashes per second</strong> to keep the running web visually frozen dead-still.
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-gray-900 block">
                    Recommended Model Match
                  </span>
                  <div className="bg-white rounded-2xl p-5 border border-gray-200">
                    <div className="inline-block bg-blue-100 text-blue-800 text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2">
                      {modelBadge}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {modelName}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {modelReason}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-blue-100/80 flex flex-col sm:flex-row gap-3">
                <Link
                  to={modelLink}
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-blue-500/20 hover:shadow-lg"
                >
                  View Model Details &rarr;
                </Link>
                <Link
                  to="/selection-guide"
                  className="text-center bg-white hover:bg-blue-50 text-blue-700 font-bold py-3 px-4 rounded-xl text-xs sm:text-sm border border-blue-200 transition-colors"
                >
                  Full Sizing Matrix
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
