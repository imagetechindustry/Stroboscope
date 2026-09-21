import React from "react";
import HomeHero from "../components/home/HomeHero";
import HomeProducts from "../components/home/HomeProducts";
import HomeIndustries from "../components/home/HomeIndustries";
import HomeAbout from "../components/home/HomeAbout";
import HomeCertifications from "../components/home/HomeCertifications";
import HomeWhyChoose from "../components/home/HomeWhyChoose";
import HomeFAQ from "../components/home/HomeFAQ";
import HomeCTA from "../components/home/HomeCTA";
import HomeSelectionCalculator from "../components/home/HomeSelectionCalculator";
import HomeWorkingPrinciple from "../components/home/HomeWorkingPrinciple";
import HomePressApplications from "../components/home/HomePressApplications";
import HomeTroubleshootingFinder from "../components/home/HomeTroubleshootingFinder";
import SEO from "../components/common/SEO";

const Home = () => {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ImageTech Industries",
    "url": "https://www.stroboscopelight.com/",
    "logo": "https://www.stroboscopelight.com/logo.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 8448336036",
        "contactType": "sales",
        "email": "imagetechindustries@gmail.com",
        "areaServed": "IN",
        "availableLanguage": "en"
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "RZ-I-13, 2nd Floor, Nanda Block, Mahavir Enclave",
        "addressLocality": "Delhi",
        "postalCode": "110045",
        "addressCountry": "IN"
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Industrial Stroboscopes",
    "image": "https://www.stroboscopelight.com/heroimage.webp",
    "description": "LED handheld, Xenon flash tube and U-tube fixed stroboscopes for printing, packaging and web inspection manufactured by ImageTech Industries.",
    "brand": {
      "@type": "Brand",
      "name": "ImageTech Industries"
    },
    "sku": "ITI-STROBO-SERIES",
    "mpn": "ITI-STROBOSCOPE-2026",
    "offers": {
      "@type": "AggregateOffer",
      "url": "https://www.stroboscopelight.com/",
      "priceCurrency": "INR",
      "lowPrice": "9500",
      "highPrice": "85000",
      "offerCount": "4",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "ImageTech Industries"
      }
    }
  };

  return (
    <>
      <SEO
        title="Stroboscope Light Manufacturer in India | Get Strobo scope light at Best Price & Manufacturer |LED &amp; Xenon Strobe Lights Strobe "
        description="Buy industrial stroboscope light instruments at best price in India from manufacturer ImageTech Industries. ISO 9001 certified LED, Xenon & U-tube strobes since 1992."
        keywords={[
          'stroboscope light price',
          'stroboscope light price in india',
          'stroboscope instrument',
          'stroboscope light led',
          'best stroboscope light',
          'stroboscope uses',
          'stroboscope light bulb',
          'stroboscope manufacturer in india',
          'stroboscope working principle',
          'stroboscope price',
          'strobo scope'
        ]}
        schema={[orgSchema, productSchema]}
      />
      <main className="flex flex-col">
        <HomeHero />
        <HomeProducts />
        <HomeIndustries />
        <HomeAbout />
        <HomeCertifications />
        <HomeWhyChoose />
        <HomeSelectionCalculator />
        <HomeWorkingPrinciple />
        <HomePressApplications />
        <HomeTroubleshootingFinder />
        <HomeFAQ />
        <HomeCTA />
      </main>
    </>
  );
};

export default Home;
