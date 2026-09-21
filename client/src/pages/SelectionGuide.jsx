import React, { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import TechnicalGuidesNav from "../components/common/TechnicalGuidesNav";
import FAQSection from "../components/common/FAQSection";

export default function SelectionGuide() {
  // Interactive Calculator State
  const [machineType, setMachineType] = useState("gravure");
  const [inspectionMode, setInspectionMode] = useState("fixed");
  const [webWidth, setWebWidth] = useState(800);
  const [lineSpeed, setLineSpeed] = useState(250); // m/min
  const [repeatLength, setRepeatLength] = useState(500); // mm

  // Calculated values
  const calculatedFPM =
    repeatLength > 0 ? Math.round((lineSpeed * 1000) / repeatLength) : 0;
  const calculatedHz = Math.round((calculatedFPM / 60) * 10) / 10;

  // Determine recommendation
  let recommendedModel = "";
  let recommendedModelLink = "";
  let recommendedReason = "";

  if (inspectionMode === "handheld") {
    if (machineType === "rotary_parts" || machineType === "motor") {
      recommendedModel = "LED Handheld Model Stroboscope (Model 1)";
      recommendedModelLink = "/products/led-handheld-stroboscope";
      recommendedReason =
        "Cordless, rechargeable battery operation allows technicians to safely measure RPM and inspect moving gears, pulleys, and shafts anywhere on the floor.";
    } else if (machineType === "flexo" || machineType === "labels") {
      recommendedModel = "LED Handheld Stroboscope with Built-in Magnifying Lens";
      recommendedModelLink = "/products/led-handheld-stroboscope-with-lens";
      recommendedReason =
        "The integrated optical magnifying lens lets press operators inspect fine screen dots, micro print registration, and plate lift without stopping the press.";
    } else {
      recommendedModel = "Xenon Flash Tube Hand Held Stroboscope";
      recommendedModelLink = "/products/xenon-flash-tube-hand-held-stroboscope";
      recommendedReason =
        "Ultra-short microsecond xenon flash duration provides razor-sharp, blur-free motion freezing on high-speed foil, paper, and film packaging lines.";
    }
  } else {
    // Fixed Continuous Web Mount
    if (webWidth <= 350) {
      recommendedModel = "U Tube Fixed Stroboscope (Model ITI-250)";
      recommendedModelLink = "/products/u-tube-fixed-model-stroboscope";
      recommendedReason =
        "Compact machine-mounted stroboscopic lamp engineered for narrow-web label presses, tape slitting, and small converting machinery up to 250–350 mm width.";
    } else if (webWidth <= 800) {
      recommendedModel = "U Tube Fixed Stroboscope (Model ITI-700)";
      recommendedModelLink = "/products/u-tube-fixed-model-stroboscope";
      recommendedReason =
        "Ideal for standard flexible packaging presses and laminators up to 700–800 mm width. Delivers uniform edge-to-edge illumination across the entire web.";
    } else if (webWidth <= 1100) {
      recommendedModel = "U Tube Fixed Stroboscope (Model ITI-1000)";
      recommendedModelLink = "/products/u-tube-fixed-model-stroboscope";
      recommendedReason =
        "Engineered for 1000 mm high-speed rotogravure printing, extrusion coating, and wide film converting lines with automatic pulse synchronization.";
    } else {
      recommendedModel = "U Tube Fixed Stroboscope (Model ITI-1300)";
      recommendedModelLink = "/products/u-tube-fixed-model-stroboscope";
      recommendedReason =
        "Our heavy-duty, maximum-width synchronized industrial stroboscope built for extra-wide 1300 mm packaging presses, paper mills, and slitter rewinders.";
    }
  }

  // Structured Data Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Stroboscope Selection & Sizing Guide: How to Choose the Right Strobe Light",
    description:
      "A complete engineering selection guide for choosing LED, Xenon, and fixed U-tube stroboscopes. Includes an interactive flash rate calculator, sizing matrix, and 3-step measurement guide.",
    author: {
      "@type": "Organization",
      name: "ImageTech Industries",
    },
    publisher: {
      "@type": "Organization",
      name: "ImageTech Industries",
      logo: {
        "@type": "ImageObject",
        url: "https://www.stroboscopelight.com/logo.png",
      },
    },
    datePublished: "2026-01-15",
    dateModified: "2026-09-21",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Measure and Size a Stroboscope for Printing and Machinery Inspection in 3 Steps",
    description:
      "Follow these three simple steps to accurately determine your required flash rate (FPM) and choose between handheld and fixed stroboscopes.",
    step: [
      {
        "@type": "HowToStep",
        name: "Measure Cylinder Repeat or Roller Circumference",
        text: "Use a simple tailor's tape or check your cylinder gear pitch. Measure the repeat distance of one full printed impression in millimetres.",
      },
      {
        "@type": "HowToStep",
        name: "Calculate Target Flash Rate (FPM)",
        text: "Multiply line speed (m/min) by 1,000 and divide by repeat length (mm) to calculate the exact flashes per minute needed to freeze the image.",
      },
      {
        "@type": "HowToStep",
        name: "Match Web Width to Stroboscope Array Width",
        text: "Select a handheld model for spot checking or a fixed U-tube lamp (ITI-250 to ITI-1300) matching your web width for continuous 24/7 edge-to-edge inspection.",
      },
    ],
  };

const selectionFaqs = [
  {
    question: "How do I choose between LED and Xenon stroboscope lights?",
    answer: "Choose LED for extended battery runtime (up to 8 hours), lighter handheld weight, cool operating temperature, and zero lamp replacement maintenance over its lifetime. Choose Xenon flash tube stroboscopes when you need razor-short microsecond pulses with maximum peak brightness to freeze ultra-high-speed foil, metallic, or reflective printing without any edge blur.",
  },
  {
    question: "What stroboscope width do I need for my printing press or converting machine?",
    answer: "Measure the maximum usable web width of your substrate. For narrow-web label presses up to 250–350 mm, select model ITI-250. For standard packaging up to 700–800 mm, select ITI-700. For wide gravure presses up to 1000 mm, use ITI-1000. For extra-wide packaging lines and paper mills up to 1300 mm, use ITI-1300. Handheld models can be used on any width for spot-checking specific inspection zones.",
  },
  {
    question: "What is FPM in a stroboscope and how does it relate to RPM?",
    answer: "FPM stands for Flashes Per Minute. It is the rate at which the stroboscope flashes each minute. In rotating machinery inspection (motors, shafts, rollers), 1 FPM equals 1 RPM. On printing presses, FPM equals the number of print repeats passing the inspection point per minute: FPM = (Line Speed in m/min × 1,000) ÷ Repeat Length in mm.",
  },
  {
    question: "Can a fixed U-tube stroboscope sync automatically with press acceleration and deceleration?",
    answer: "Yes. All ImageTech U-Tube Fixed Model Stroboscopes (ITI-250, ITI-700, ITI-1000, ITI-1300) feature both Auto and Manual synchronization modes. In Auto mode, an external proximity sensor or optical encoder sends gear tooth or repeat pulses, allowing the strobe flash rate to speed up and slow down dynamically with press acceleration without manual operator adjustments.",
  },
  {
    question: "What is the recommended working distance between the strobe lamp and the running web?",
    answer: "For handheld units, the ideal inspection distance is 200 mm to 600 mm from the substrate. For fixed machine-mounted U-tube arrays, the unit is typically bolted 300 mm to 500 mm above the open web path between two idler rollers where web flutter is lowest.",
  },
  {
    question: "Can handheld battery-operated stroboscopes run continuously during a full 8-hour shift?",
    answer: "Yes. Our LED Handheld Stroboscopes utilize high-capacity lithium-ion rechargeable battery packs providing 6 to 8 hours of continuous operation per charge. They can also be operated while plugged into their mains adapter for uninterrupted 24/7 bench-top or station inspection.",
  },
  {
    question: "How do I calculate flash rate if my print cylinder has multiple repeats around its circumference?",
    answer: "If a printing plate cylinder has multiple repeat designs around its circumference (e.g., 3 identical pouch designs per turn), multiply the cylinder's rotational RPM by the number of repeats: Target FPM = Cylinder RPM × Number of Repeats. This ensures the stroboscope flashes once per repeat, freezing every single pouch design in place.",
  },
  {
    question: "What trigger sensor types work best with machine-mounted fixed stroboscopes?",
    answer: "We recommend inductive proximity sensors (sensing gear teeth or metallic bolt heads) or photoelectric retro-reflective sensors (detecting a reflective tape mark on a roller shaft). Both produce clean 5V to 24V square-wave pulses for rock-solid flash synchronization.",
  },
  {
    question: "Can one stroboscope inspect both sides of a duplex printing press simultaneously?",
    answer: "For duplex (front and back) printing, we recommend two synchronized stroboscopic lamps: one mounted above the top side of the web and one mounted beneath the reverse side, both triggered from the same machine speed signal. This allows press operators to verify front-to-back registration alignment instantly.",
  },
  {
    question: "Is an LED stroboscope bright enough to inspect dark or black inks on metallic foil?",
    answer: "Yes. ImageTech LED stroboscopes utilize high-flux industrial LEDs with focused parabolic optics that produce intense white illumination. When angled at 40° to 45° to avoid specular reflection, dark inks and fine registration marks stand out with high contrast even against brilliant metallic foil backgrounds.",
  },
];

  return (
    <>
      <SEO
        title="Stroboscope Selection & Sizing Guide | Calculator & Sizing Matrix"
        description="Comprehensive stroboscope selection guide. Use our interactive flash rate & sizing calculator, model comparison matrix, and 3-step measuring guide for printing & converting."
        keywords={[
          "stroboscope selection guide",
          "stroboscope sizing calculator",
          "stroboscope light price",
          "strobo scope selection",
          "how to choose a stroboscope",
          "stroboscope flash rate calculation",
          "web inspection stroboscope sizing",
          "stroboscope instrument",
        ]}
        schema={[articleSchema, howToSchema]}
      />

      <div className="bg-slate-50 min-h-screen py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="text-sm font-semibold mb-6 flex text-slate-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-bold">Stroboscope Selection & Sizing Guide</span>
          </nav>

          {/* 4-Pillar Sub-Navigation */}
          <TechnicalGuidesNav />

          {/* Hero Section */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200/80 mb-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Technical Engineering & Sizing Guide
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                Stroboscope Selection & Sizing Guide:{" "}
                <span className="text-blue-600">Choose the Right Instrument</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                Choosing the right stroboscope (also written as <strong>strobo scope light</strong>) ensures that your press operators spot print registration errors, blade streaks, and web defects instantly without ever halting high-speed machinery. Use our live sizing formula, comparison matrix, and simple 3-step measurement guide below.
              </p>

              {/* Meta Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-black text-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Pressroom Grade</h4>
                    <p className="text-xs text-slate-500">Validated on 500+ Indian Presses</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-black text-sm">
                    ⚡
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Live Calculator</h4>
                    <p className="text-xs text-slate-500">Instant FPM & Model Match</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-black text-sm">
                    ★
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">ISO 9001:2015</h4>
                    <p className="text-xs text-slate-500">Factory Calibrated Reliability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Interactive Sizing & Formula Calculator */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200/80 mb-12">
            <div className="max-w-3xl mb-8">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
                Tool 1 • Interactive Sizing Formula
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Stroboscope Flash Rate & Model Recommender
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Enter your machine operating parameters below to compute your required flash frequency in flashes per minute (FPM) and discover the ideal stroboscope setup for your production line.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Calculator Inputs */}
              <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    1. Machine / Application Type
                  </label>
                  <select
                    value={machineType}
                    onChange={(e) => setMachineType(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="gravure">Rotogravure Printing Press (Film, Foil, Paper)</option>
                    <option value="flexo">Flexographic Web Press (Corrugated, Bags)</option>
                    <option value="labels">Narrow-Web Label Press (Stickers, Foiling)</option>
                    <option value="slitter">Slitter Rewinder / Inspection Table</option>
                    <option value="rotary_parts">High-Speed Rotating Rollers / Gearbox</option>
                    <option value="motor">Electric Motor / Industrial Fan RPM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    2. Inspection Mode
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setInspectionMode("handheld")}
                      className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all text-center ${
                        inspectionMode === "handheld"
                          ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      Handheld Portable
                    </button>
                    <button
                      type="button"
                      onClick={() => setInspectionMode("fixed")}
                      className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all text-center ${
                        inspectionMode === "fixed"
                          ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                          : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      Fixed Machine-Mounted
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        3. Web Width (mm)
                      </label>
                      <span className="text-xs font-extrabold text-blue-600">{webWidth} mm</span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="1500"
                      step="50"
                      value={webWidth}
                      onChange={(e) => setWebWidth(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>200 mm</span>
                      <span>800 mm</span>
                      <span>1500 mm</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        4. Line Speed (m/min)
                      </label>
                      <span className="text-xs font-extrabold text-blue-600">{lineSpeed} m/min</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="600"
                      step="10"
                      value={lineSpeed}
                      onChange={(e) => setLineSpeed(Number(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>30 m/min</span>
                      <span>300 m/min</span>
                      <span>600 m/min</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      5. Print Repeat / Cylinder Circumference (mm)
                    </label>
                    <span className="text-xs font-extrabold text-blue-600">{repeatLength} mm</span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="1200"
                    step="20"
                    value={repeatLength}
                    onChange={(e) => setRepeatLength(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                  <p className="text-[11px] text-slate-500 mt-1.5">
                    For rollers or motors, enter the circumference (π × Diameter) or select 1000 mm for direct RPM matching.
                  </p>
                </div>
              </div>

              {/* Calculator Output */}
              <div className="lg:col-span-5 bg-gradient-to-br from-blue-50 via-white to-blue-50/40 p-6 sm:p-8 rounded-2xl border border-blue-200 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-blue-100 mb-6">
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                      Calculation Result
                    </span>
                    <span className="text-xs bg-blue-100 text-blue-700 font-extrabold px-2.5 py-0.5 rounded-full">
                      Live Output
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Required Flash Rate
                      </span>
                      <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                        {calculatedFPM.toLocaleString()}{" "}
                        <span className="text-xs font-bold text-blue-600">FPM</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">Flashes per minute</p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Frequency (Hz)
                      </span>
                      <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                        {calculatedHz}{" "}
                        <span className="text-xs font-bold text-blue-600">Hz</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">Cycles per second</p>
                    </div>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-blue-200 shadow-sm mb-6">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                      Recommended Stroboscope Model
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                      {recommendedModel}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {recommendedReason}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-blue-100">
                  <Link
                    to={recommendedModelLink}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-center text-sm transition-colors shadow-md shadow-blue-500/20 block"
                  >
                    View Model Specs & Price Quote &rarr;
                  </Link>
                  <button
                    onClick={() =>
                      window.dispatchEvent(new CustomEvent("open-quote-modal"))
                    }
                    className="w-full bg-white hover:bg-slate-50 text-slate-800 font-bold py-2.5 px-4 rounded-xl text-center text-xs border border-slate-300 transition-colors block"
                  >
                    Request Custom Factory Sizing
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Model Dimension & Sizing Decision Matrix */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200/80 mb-12">
            <div className="max-w-3xl mb-8">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
                Specification Table • Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Stroboscope Dimension & Technical Decision Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Compare light source technologies, supported web widths, optical lux intensity, and power supply specifications to pick the exact configuration for your factory floor.
              </p>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 text-slate-700 font-extrabold uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Model</th>
                    <th className="py-4 px-4">Light Source</th>
                    <th className="py-4 px-4">Mounting</th>
                    <th className="py-4 px-4">Supported Width</th>
                    <th className="py-4 px-4">Power Source</th>
                    <th className="py-4 px-4">Primary Application</th>
                    <th className="py-4 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      LED Handheld Model 1
                    </td>
                    <td className="py-4 px-4">High-Flux LED Array</td>
                    <td className="py-4 px-4">Ergonomic Handheld</td>
                    <td className="py-4 px-4">Spot Inspection (Any)</td>
                    <td className="py-4 px-4">Rechargeable Li-Ion</td>
                    <td className="py-4 px-4">Motor RPM, Rollers, Gearboxes</td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        to="/products/led-handheld-stroboscope"
                        className="text-blue-600 hover:text-blue-800 font-bold"
                      >
                        Specs &rarr;
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      LED Handheld with Lens
                    </td>
                    <td className="py-4 px-4">LED + Optical Lens</td>
                    <td className="py-4 px-4">Handheld + Magnifier</td>
                    <td className="py-4 px-4">Focused View (Any)</td>
                    <td className="py-4 px-4">Rechargeable Li-Ion</td>
                    <td className="py-4 px-4">Print Registration & Micro-Dots</td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        to="/products/led-handheld-stroboscope-with-lens"
                        className="text-blue-600 hover:text-blue-800 font-bold"
                      >
                        Specs &rarr;
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Xenon Flash Tube Handheld
                    </td>
                    <td className="py-4 px-4">Xenon Gas Flash Tube</td>
                    <td className="py-4 px-4">Handheld Pistol Grip</td>
                    <td className="py-4 px-4">Wide Area Beam (Any)</td>
                    <td className="py-4 px-4">220V AC / Battery Opt</td>
                    <td className="py-4 px-4">Zero-Blur High-Speed Printing</td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        to="/products/xenon-flash-tube-hand-held-stroboscope"
                        className="text-blue-600 hover:text-blue-800 font-bold"
                      >
                        Specs &rarr;
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      U-Tube Fixed ITI-250
                    </td>
                    <td className="py-4 px-4">U-Tube Xenon Lamp</td>
                    <td className="py-4 px-4">Machine Chassis Mount</td>
                    <td className="py-4 px-4">Up to 250–350 mm</td>
                    <td className="py-4 px-4">230 VAC 50Hz Mains</td>
                    <td className="py-4 px-4">Labels, Narrow Web, Slitters</td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        to="/products/u-tube-fixed-model-stroboscope"
                        className="text-blue-600 hover:text-blue-800 font-bold"
                      >
                        Specs &rarr;
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      U-Tube Fixed ITI-700
                    </td>
                    <td className="py-4 px-4">U-Tube Xenon Lamp</td>
                    <td className="py-4 px-4">Machine Chassis Mount</td>
                    <td className="py-4 px-4">Up to 700–800 mm</td>
                    <td className="py-4 px-4">230 VAC 50Hz Mains</td>
                    <td className="py-4 px-4">Flexible Packaging & Coating</td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        to="/products/u-tube-fixed-model-stroboscope"
                        className="text-blue-600 hover:text-blue-800 font-bold"
                      >
                        Specs &rarr;
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      U-Tube Fixed ITI-1000
                    </td>
                    <td className="py-4 px-4">U-Tube Xenon Lamp</td>
                    <td className="py-4 px-4">Machine Chassis Mount</td>
                    <td className="py-4 px-4">Up to 1000 mm</td>
                    <td className="py-4 px-4">230 VAC 50Hz Mains</td>
                    <td className="py-4 px-4">Rotogravure Printing Presses</td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        to="/products/u-tube-fixed-model-stroboscope"
                        className="text-blue-600 hover:text-blue-800 font-bold"
                      >
                        Specs &rarr;
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      U-Tube Fixed ITI-1300
                    </td>
                    <td className="py-4 px-4">Dual U-Tube Lamp Array</td>
                    <td className="py-4 px-4">Machine Chassis Mount</td>
                    <td className="py-4 px-4">Up to 1300 mm</td>
                    <td className="py-4 px-4">230 VAC 50Hz Mains</td>
                    <td className="py-4 px-4">Extra-Wide Gravure & Paper Mills</td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        to="/products/u-tube-fixed-model-stroboscope"
                        className="text-blue-600 hover:text-blue-800 font-bold"
                      >
                        Specs &rarr;
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: "How to Measure in 3 Simple Steps" */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200/80 mb-12">
            <div className="max-w-3xl mb-10">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
                Operator Best Practices
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                How to Measure & Size Your Strobe in 3 Simple Steps
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                You do not need an advanced engineering degree to size your stroboscope properly. Follow this simple pressroom workflow with basic tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center mb-4 text-sm">
                  1
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Measure Cylinder Repeat Distance
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Take a standard tape measure and measure the length from the start of one printed design to the start of the next (repeat length). For plain rollers or shafts, calculate roller circumference: <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 text-blue-700 font-bold">Circumference = 3.1416 × Roller Diameter</code>.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center mb-4 text-sm">
                  2
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Calculate Flashes Per Minute (FPM)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Convert your press line speed from metres/min to millimetres/min (multiply by 1,000). Then divide by your repeat length.
                  <br />
                  <span className="inline-block mt-2 font-mono text-[11px] bg-white p-1.5 rounded border border-slate-200 text-blue-800 font-bold">
                    FPM = (Line Speed × 1,000) ÷ Repeat Length
                  </span>
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black flex items-center justify-center mb-4 text-sm">
                  3
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Match Web Width & Mounting
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  If your press runs continuously 24/7, pick a fixed U-tube lamp that matches or slightly exceeds your maximum web width. If your QA inspectors move between 4 different machines, choose the rechargeable battery LED Handheld model.
                </p>
              </div>
            </div>
          </div>

          {/* Next Guide Recommendation */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200 block mb-1">
                Next Guide in the Engineering Suite
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mb-2">
                Pillar 2: Stroboscope Working Principle & Physics
              </h3>
              <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
                Learn the simple science of persistence of vision, why continuous light blurs moving webs, and how to avoid the 2X harmonic multiplier trap during machine RPM testing.
              </p>
            </div>
            <Link
              to="/working-principle"
              className="shrink-0 bg-white text-blue-700 hover:bg-blue-50 font-bold py-3.5 px-8 rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
            >
              Read Working Principle Guide &rarr;
            </Link>
          </div>

          {/* Section 4: Technical FAQs with identical UI structure */}
          <div className="mt-8">
            <FAQSection
              title="Everything You Need To Know About Stroboscope Sizing"
              subtitle="Frequently Asked Questions"
              description="Engineering answers on calculating flash rates, choosing between LED and Xenon, and selecting fixed U-tube lamp widths."
              faqs={selectionFaqs}
            />
          </div>
        </div>
      </div>
    </>
  );
}
