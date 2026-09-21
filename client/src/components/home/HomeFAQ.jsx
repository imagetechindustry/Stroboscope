import React from "react";
import FAQSection from "../common/FAQSection";

const faqData = [
  {
    question: "What is a handheld stroboscope used for?",
    answer: "A handheld stroboscope is used for inspecting high-speed moving and rotating parts. It creates a visual effect of stopping or slowing down the motion, allowing for easy inspection of machine parts during operation without the need to stop production.",
  },
  {
    question: "Is this stroboscope battery operated?",
    answer: "Yes, our handheld model stroboscopes are equipped with a rechargeable battery, making them highly portable and convenient to use in various production areas without the need for a direct power connection.",
  },
  {
    question: "What type of light does this stroboscope use?",
    answer: "We offer stroboscopes with different light sources, including LED and Xenon Flash Tubes. LED models provide bright, consistent flashes with low power consumption, while Xenon models deliver intense, short flashes for high-speed inspection.",
  },
  {
    question: "Can it be used for printing machine inspection?",
    answer: "Absolutely. Our stroboscopes are ideal for inspecting printing machines, rollers, moving webs, and print registration, ensuring high quality control during continuous production.",
  },
  {
    question: "Can the machine be inspected without stopping production?",
    answer: "Yes, that is the primary advantage of a stroboscope. The flashing light synchronizes with the moving parts, allowing you to visually inspect and diagnose issues while the machinery is running at full speed.",
  },
  {
    question: "Is the stroboscope portable?",
    answer: "Yes, our handheld models are designed to be compact, lightweight, and easy to carry across different machines and inspection points in a facility.",
  },
  {
    question: "Where can this stroboscope be used?",
    answer: "It can be used in printing, packaging, converting, coating, laminating, and general industrial manufacturing to inspect any high-speed rotating or moving components.",
  },
  {
    question: "What is the U Tube Fixed Model Stroboscope?",
    answer: "The U Tube Fixed Model Stroboscope is a machine-mounted inspection system designed for continuous web inspection and synchronization in printing and packaging machines. It offers both automatic and manual synchronization.",
  },
  {
    question: "What is the working principle of a stroboscope light instrument?",
    answer: "A stroboscope operates on the principle of persistence of vision and optical synchronization. By emitting regular, high-frequency bursts of light matching the rotational speed (RPM) or cycle rate of moving equipment, the object appears stationary to the human eye, enabling real-time visual inspection and speed diagnosis without stopping the machine.",
  },
  {
    question: "What are the common uses of an industrial stroboscope?",
    answer: "Industrial stroboscopes are used for: (1) Measuring RPM and vibration of motors, fans, shafts, and gearboxes non-contact; (2) Inspecting print registration, ink bleeding, and dot quality on rotogravure and flexo printing presses; (3) Monitoring continuous moving webs, packaging films, and converting machines; (4) Diagnostic inspection to spot belt slippage and damaged teeth.",
  },
  {
    question: "What is the price of a stroboscope light in India?",
    answer: "Stroboscope light prices in India depend on the light source (LED vs Xenon), battery portability, flash rate range, and whether the system is handheld or machine-mounted. Handheld battery-operated LED stroboscopes are highly economical, while heavy-duty U-tube synchronized systems are built for wide industrial presses. Contact ImageTech Industries for best manufacturer price quotes.",
  },
  {
    question: "Can Xenon stroboscope light bulbs or flash tubes be replaced?",
    answer: "Yes, portable Xenon stroboscopes utilize replaceable xenon flash tube bulbs. ImageTech Industries supplies original, long-life replacement Xenon tubes and lamp assemblies ensuring your inspection equipment remains operational without costly downtime.",
  },
  {
    question: "How does a stroboscope sensor synchronization work?",
    answer: "Fixed and advanced industrial stroboscopes connect to external proximity sensors or photo-reflective sensors mounted on machine rollers. When the machine speeds up or slows down, the sensor sends trigger pulses that automatically synchronize the strobe flash rate to the machine speed in real time.",
  },
];

import { SchemaInjector } from "../common/SEO";

const HomeFAQ = ({ locationData }) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SchemaInjector schema={faqSchema} />
      <FAQSection
        title={`Everything You Need To Know About Stroboscopes${locationData ? ' in ' + locationData.name : ''}`}
        subtitle="Frequently Asked Questions"
        description="Find answers to common questions about our industrial products, applications, manufacturing capabilities, and technical support."
        faqs={faqData}
      />
    </>
  );
};

export default HomeFAQ;
