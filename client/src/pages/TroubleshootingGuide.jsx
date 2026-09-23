import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import TechnicalGuidesNav from "../components/common/TechnicalGuidesNav";
import FAQSection from "../components/common/FAQSection";

export default function TroubleshootingGuide() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Stroboscope Troubleshooting & Printing Defect Quick-Finder Guide",
    description:
      "A complete pressroom diagnostic troubleshooting guide. Features a Visual Quick-Finder table for print defects, 6 detailed defect diagnostic cards, and a daily stroboscope maintenance SOP.",
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
    datePublished: "2026-01-30",
    dateModified: "2026-09-21",
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Daily Maintenance & Cleaning SOP for Industrial Stroboscopes",
    description:
      "Daily preventative maintenance protocol to maximize stroboscope lamp lifespan and maintain optical clarity on factory floors.",
    step: [
      {
        "@type": "HowToStep",
        name: "Optical Lens Cleaning",
        text: "Clean dust and ink mist from the front acrylic or glass reflector using an optical microfiber cloth. Never use harsh solvent-based thinners on plastic lenses.",
      },
      {
        "@type": "HowToStep",
        name: "Battery Cycle Protocol",
        text: "For LED handheld units, recharge before the battery drops below 10%. Avoid leaving units plugged into chargers continuously after reaching full charge.",
      },
      {
        "@type": "HowToStep",
        name: "Mounting & Vibration Inspection",
        text: "For fixed U-tube lamps mounted on machinery, verify mounting bolt tightness and cable routing away from hot dryers or moving web paths every 100 operating hours.",
      },
    ],
  };

  const troubleshootingFaqs = [
    {
      question: "Why is my stroboscope light flickering erratically or skipping flashes?",
      answer: "Erratic flickering is most commonly caused by three factors: (1) on rechargeable battery models, the voltage has dropped below the operational threshold—recharge the battery pack; (2) on external trigger units, the proximity sensor gap to the gear tooth is too wide (should be 1.5–2.0 mm) or loose wiring exists; or (3) electrical noise interference from a nearby variable frequency drive (VFD) inverter cable is bleeding into unshielded trigger lines.",
    },
    {
      question: "How can an operator catch hairline doctor blade streaks before an entire roll is wasted?",
      answer: "Install a fixed U-tube stroboscope (or point a handheld unit) directly after the final color printing station dryer exit. Angle the flash at 30° to 45° across the web face. Hairline ink drag streaks, caused by micro-nicks in the doctor blade or dried ink flakes, reflect differently than smooth wet ink and will appear as continuous dark or light streaks against the frozen pattern within seconds of forming.",
    },
    {
      question: "Why does the frozen image slowly drift or crawl across the web instead of locking in place?",
      answer: "A creeping or drifting image indicates a minor frequency mismatch between the stroboscope's flash rate and the line speed. If operating in Manual Internal mode, adjust the fine-tune rotary encoder dial (0.1 FPM steps) until the image locks dead-still. If in Auto mode, verify that the encoder wheel is not slipping on the roller shaft and that the sensor trigger pulse is consistent.",
    },
    {
      question: "Why must operators NEVER clean stroboscope acrylic lenses with solvent thinners?",
      answer: "Pressroom solvents like ethyl acetate, methyl ethyl ketone (MEK), and toluene aggressively dissolve and craze acrylic (PMMA) and polycarbonate plastic shields, turning crystal-clear optical lenses permanently cloudy and white within seconds. Always clean optical lenses and reflectors using optical microfiber cloths with isopropyl alcohol (IPA) or mild soapy water.",
    },
    {
      question: "How long does a xenon flash tube last, and what are the warning signs of tube failure?",
      answer: "Industrial xenon flash tubes deliver an average lifespan of 100 million flashes (approximately 2,000 to 4,000 hours of heavy industrial pressroom duty). Warning signs of approaching failure include blackening or silvering near the internal tungsten electrodes, intermittent failure to ignite at low flash rates, or a noticeable drop in flash luminosity.",
    },
    {
      question: "How do I tell the difference between print gear chatter and web tension flutter?",
      answer: "Under a stroboscope, gear chatter appears as razor-sharp, evenly spaced cross-web horizontal banding lines that match the exact tooth pitch of the cylinder driving gears (typically 1/8\" or 1/4\" circular pitch). Web tension flutter appears as irregular, shifting diagonal ripples or wave-like distortions that expand and contract as web speed fluctuates.",
    },
    {
      question: "What causes anilox roll starvation versus doctor blade wiping streaks in flexography?",
      answer: "Anilox starvation produces patchy, faded ink density across entire graphic blocks, visible under stroboscopic inspection as washed-out color zones caused by dried ink plugging microscopic anilox cells or insufficient ink chamber pump pressure. Blade wiping streaks appear as sharp, isolated longitudinal lines caused by damaged blade edges or foreign abrasive particles trapped beneath the blade.",
    },
    {
      question: "How can I prevent lithium-ion battery degradation on handheld stroboscopes?",
      answer: "To maximize the lifespan of internal Li-Ion batteries (typically 3 to 5 years), recharge the handheld unit before the battery indicator drops below 15–20%. Avoid leaving handheld stroboscopes sitting on continuous charging docks for days without use, and store units away from hot machine dryers or radiant heat sources.",
    },
    {
      question: "Why is the stroboscope showing two overlapping images instead of one single clear image?",
      answer: "Overlapping double images occur when the stroboscope is set to twice the actual rotational or repeat frequency (2X harmonic). The strobe is flashing twice during each revolution, capturing the object at 0° and 180°. Press the '÷2' (divide by two) button or dial the flash rate down until exactly one sharp, single image appears.",
    },
    {
      question: "What preventative maintenance checks should be performed on machine-mounted fixed stroboscopes every month?",
      answer: "Once a month, perform four maintenance checks: (1) check mounting bracket bolts for vibration loosening; (2) gently wipe ink mist and dust from the front reflector lens with IPA; (3) inspect external sensor cables for fraying or proximity to hot drying hoods; and (4) verify that chassis ventilation cooling slots are clean and free of airborne lint and paper powder.",
    },
  ];

  return (
    <>
      <SEO
        title="Stroboscope Troubleshooting Guide | Printing Defect Quick-Finder"
        description="Comprehensive stroboscope troubleshooting guide. Get expert solutions to common problems and diagnose stroboscope issues, print register drift, web flutter, and gear chatter with our Visual Quick-Finder and daily SOP."
        keywords={[
          "stroboscope troubleshooting",
          "stroboscope not flashing",
          "printing defect troubleshooting",
          "doctor blade streak inspection",
          "print registration drift",
          "strobo scope troubleshooting",
          "stroboscope maintenance guide",
          "stroboscope instrument repair",
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
            <span className="text-slate-900 font-bold">Stroboscope Troubleshooting Guide</span>
          </nav>

          {/* 4-Pillar Sub-Navigation */}
          <TechnicalGuidesNav />

          {/* Hero Header */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200/80 mb-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Pressroom Diagnostics & SOP
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                Stroboscope Troubleshooting:{" "}
                <span className="text-blue-600">Printing Defect Quick-Finder</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                Fast machinery produces fast waste. When a defect occurs on a high-speed printing or laminating line, every passing minute costs thousands of rupees in scrapped film and ink. Use our <strong>Visual Quick-Finder Table</strong> and <strong>6 Defect Diagnostic Cards</strong> to identify and fix root causes immediately.
              </p>

              {/* Meta Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-black text-sm">
                    🔍
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Visual Quick-Finder</h4>
                    <p className="text-xs text-slate-500">Fast Symptom-to-Fix Matrix</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-black text-sm">
                    📋
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">6 Diagnostic Cards</h4>
                    <p className="text-xs text-slate-500">Blade, Register, Anilox, Web</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-black text-sm">
                    🛠
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Daily Cleaning SOP</h4>
                    <p className="text-xs text-slate-500">Optics & Battery Care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Visual Quick-Finder Table */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200/80 mb-12">
            <div className="max-w-3xl mb-8">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
                Immediate Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Visual Defect Quick-Finder: Problem &rarr; Cause &rarr; Solution
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Look at the frozen image under your stroboscope light, match your visible problem in the left column, and apply the immediate pressroom countermeasure.
              </p>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 text-slate-700 font-extrabold uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-4 px-4 sm:px-6">Visible Symptom Under Strobe</th>
                    <th className="py-4 px-4">Likely Pressroom Cause</th>
                    <th className="py-4 px-4">Stroboscope Inspection Method</th>
                    <th className="py-4 px-4">Immediate Operator Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Fine continuous vertical ink line running down the web
                    </td>
                    <td className="py-4 px-4 text-rose-700 font-semibold">
                      Dried ink / metal particle trapped behind doctor blade
                    </td>
                    <td className="py-4 px-4">
                      Focus strobe beam at 45° angle directly at the cylinder exit
                    </td>
                    <td className="py-4 px-4 text-emerald-700 font-bold">
                      Oscillate doctor blade, wipe blade edge with lint-free cloth, or replace blade
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Colors shifting out of alignment (Register Cross drifting)
                    </td>
                    <td className="py-4 px-4 text-rose-700 font-semibold">
                      Web tension fluctuation or compensator roll slip during ramp-up
                    </td>
                    <td className="py-4 px-4">
                      Lock strobe frequency to repeat length; observe micro registration cross
                    </td>
                    <td className="py-4 px-4 text-emerald-700 font-bold">
                      Adjust infeed/outfeed dancer roll tension and check cylinder drive gears
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Repeating horizontal light and dark bands (Banding)
                    </td>
                    <td className="py-4 px-4 text-rose-700 font-semibold">
                      Gear chatter, worn journal bearings, or cylinder bounce
                    </td>
                    <td className="py-4 px-4">
                      Tune strobe to drive gear pitch; freeze gears while checking web banding
                    </td>
                    <td className="py-4 px-4 text-emerald-700 font-bold">
                      Check gear backlash, lubricate drive train, verify cylinder journal concentricity
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Web fluttering up and down, causing blurry image
                    </td>
                    <td className="py-4 px-4 text-rose-700 font-semibold">
                      Unbalanced guide roller or excessive dryer air velocity
                    </td>
                    <td className="py-4 px-4">
                      Aim strobe at idler roller ends to spot eccentric roller wobble
                    </td>
                    <td className="py-4 px-4 text-emerald-700 font-bold">
                      Balance or replace idler roller; reduce air nozzle turbulence in dryer
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50/50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-bold text-slate-900">
                      Halftone dots fuzzy, haloed, or smeared (Dot Gain)
                    </td>
                    <td className="py-4 px-4 text-rose-700 font-semibold">
                      Excessive plate pressure or low ink viscosity
                    </td>
                    <td className="py-4 px-4">
                      Use LED Handheld with Lens model to inspect 50% screen dots close-up
                    </td>
                    <td className="py-4 px-4 text-emerald-700 font-bold">
                      Back off impression cylinder to a true kiss impression; check ink cup viscosity
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: 6 Detailed Defect Diagnostic Cards */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200/80 mb-12">
            <div className="max-w-3xl mb-8">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
                Defect Breakdown • Diagnostic Cards
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                6 Critical Press Defect Diagnostic Cards
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
                      Defect Code D-01
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Gravure & Flexo</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Doctor Blade Hairline Streaks
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    <strong>Mechanism:</strong> A nick on the blade tip or trapped dried grit forces ink beneath the blade contact area, printing a persistent sharp line across the entire length of the substrate.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-blue-700 block">
                    Diagnostic Tool:
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    Xenon Flash Tube Handheld or Fixed U-Tube Lamp
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
                      Defect Code D-02
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Multi-Color</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Color Registration Drift
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    <strong>Mechanism:</strong> Film elongation under thermal drying tension or uneven motor acceleration shifts the Yellow/Magenta/Cyan/Black registration crosshair out of zero tolerance.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-blue-700 block">
                    Diagnostic Tool:
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    LED Handheld Stroboscope with Built-in Magnifying Lens
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
                      Defect Code D-03
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Flexography</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Anilox Starvation & Scumming
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    <strong>Mechanism:</strong> Partially dried ink plugs anilox cells, reducing cell volume and leaving light patches. Conversely, dirty blades cause ink scumming over non-image areas.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-blue-700 block">
                    Diagnostic Tool:
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    LED Handheld Model 1 (High Intensity Flash)
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
                      Defect Code D-04
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Converting</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Web Flutter & Tension Wrinkling
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    <strong>Mechanism:</strong> Slack web tension between nip rollers allows air entrapment under light film, making the substrate flutter violently and produce blurry register printing.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-blue-700 block">
                    Diagnostic Tool:
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    U-Tube Fixed Model ITI-700 / ITI-1000
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
                      Defect Code D-05
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Mechanical</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Gear Chatter & Cylinder Bounce
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    <strong>Mechanism:</strong> Worn drive gear teeth mesh irregularly, producing microscopic torsional vibrations that print as horizontal bands exactly matching gear pitch intervals.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-blue-700 block">
                    Diagnostic Tool:
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    LED Handheld Model 1 (Harmonic Tuning)
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
                      Defect Code D-06
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Finishing</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Slitter Blade Burrs & Edge Tear
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    <strong>Mechanism:</strong> Dulling shear knives or razor blades tear rather than cleanly slice plastic films, leaving microscopic burrs that cause web breaks on customer packaging machines.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-blue-700 block">
                    Diagnostic Tool:
                  </span>
                  <p className="text-xs font-semibold text-slate-800">
                    LED Handheld with Lens at Slitting Station
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Daily Maintenance & Cleaning SOP */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200/80 mb-12">
            <div className="max-w-3xl mb-8">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
                Preventative Maintenance SOP
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Daily Stroboscope Care & Cleaning Protocol
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Follow this simple daily protocol to ensure your stroboscope instruments operate reliably for 5+ years in harsh factory environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-3">
                  1
                </div>
                <h4 className="font-bold text-base text-slate-900 mb-2">
                  Optical Lens & Reflector Care
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Ink fumes and fine talc dust settle on the front optical face. Gently wipe the lens daily using an optical microfiber cloth. <strong>Do not use ethyl acetate, MEK, or harsh solvent thinners</strong> on acrylic front shields.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-3">
                  2
                </div>
                <h4 className="font-bold text-base text-slate-900 mb-2">
                  Rechargeable Battery Health
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Charge handheld units when the battery indicator reaches 15–20%. Li-Ion cells have no memory effect; recharging after a shift prolongs total battery cycle lifespan and guarantees full illumination brightness.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs mb-3">
                  3
                </div>
                <h4 className="font-bold text-base text-slate-900 mb-2">
                  Xenon Flash Tube Replacement
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Xenon tubes typically deliver <strong>100 million flashes</strong>. When a xenon tube approaches the end of its lifespan, you will notice blackening at the electrode ends. Contact ImageTech for plug-and-play original replacement tubes.
                </p>
              </div>
            </div>
          </div>

          {/* Next Guide Recommendation */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-200 block mb-1">
                Complete Your Engineering Review
              </span>
              <h3 className="text-2xl sm:text-3xl font-black mb-2">
                Need to Calculate Flash Rates for Your Machinery?
              </h3>
              <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
                Use our interactive Stroboscope Selection & Sizing Calculator to match your exact cylinder repeat length, line speed, and web width with the ideal instrument.
              </p>
            </div>
            <Link
              to="/selection-guide"
              className="shrink-0 bg-white text-blue-700 hover:bg-blue-50 font-bold py-3.5 px-8 rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
            >
              Open Sizing Calculator &rarr;
            </Link>
          </div>

          {/* Section 4: Troubleshooting FAQs with standardized UI */}
          <div className="mt-8">
            <FAQSection
              title="Frequently Asked Questions: Stroboscope Troubleshooting & Maintenance"
              subtitle="Pressroom Diagnostics FAQs"
              description="Practical answers on fixing flickering, catching hairline blade drag marks, preventing image drift, and extending lamp lifespan."
              faqs={troubleshootingFaqs}
            />
          </div>
        </div>
      </div>
    </>
  );
}
