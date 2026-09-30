import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  CheckCircle2,
  Settings,
  Layout,
  Maximize,
  Truck,
  Target,
  Shield,
  Activity,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
  MapPin,
} from "lucide-react";
import {
  useLocation as useLocationQuery,
  useProduct,
  useProducts,
  usePrefetchProduct,
} from "../services/api";
import SEO from "../components/common/SEO";
import NotFound from "../components/common/NotFound";
import HomeCTA from "../components/home/HomeCTA";

const IconMap = {
  Settings: <Settings className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Maximize: <Maximize className="w-5 h-5" />,
  Truck: <Truck className="w-5 h-5" />,
  Target: <Target className="w-6 h-6 text-blue-600" />,
  Shield: <Shield className="w-6 h-6 text-blue-600" />,
  Activity: <Activity className="w-6 h-6 text-blue-600" />,
};

const CityProductPageSkeleton = () => (
  <div className="bg-[#f8f9fa] min-h-screen py-8 lg:py-12 animate-pulse font-sans">
    <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs Skeleton */}
      <div className="flex items-center gap-2 mb-8">
        <div className="h-4 w-16 bg-gray-200 rounded"></div>
        <div className="h-4 w-4 bg-gray-200 rounded"></div>
        <div className="h-4 w-24 bg-gray-200 rounded"></div>
        <div className="h-4 w-4 bg-gray-200 rounded"></div>
        <div className="h-4 w-36 bg-gray-200 rounded"></div>
      </div>

      {/* Main Product Card Skeleton */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        <div className="w-full lg:w-1/2 aspect-square bg-white rounded-2xl border border-gray-200"></div>
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="h-6 w-48 bg-blue-100 rounded-full"></div>
          <div className="h-10 w-4/5 bg-gray-200 rounded-xl"></div>
          <div className="h-5 w-3/5 bg-gray-200 rounded-lg"></div>
          <div className="space-y-3 pt-2">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 pt-4">
            <div className="h-12 w-48 bg-blue-600/30 rounded-lg"></div>
            <div className="h-12 w-48 bg-green-600/30 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const isInvalidSlug = (slug) =>
  !slug || slug.includes(".") || slug === "robots" || slug === "sitemap";

const CityProductPage = () => {
  const { locationSlug, productSlug } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Image Zoom State
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isZooming, setIsZooming] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
    setActiveTab("overview");
    setOpenFaqIndex(null);
  }, [locationSlug, productSlug]);

  const invalid = isInvalidSlug(locationSlug) || isInvalidSlug(productSlug);

  const {
    data: product,
    isLoading: isProductLoading,
    isError: isProductError,
    error: productError,
  } = useProduct(productSlug, { enabled: !invalid });

  const {
    data: location,
    isLoading: isLocationLoading,
    isError: isLocationError,
    error: locationError,
    refetch,
  } = useLocationQuery(locationSlug, { enabled: !invalid });

  const { data: allProducts = [] } = useProducts("stroboscopes");
  const prefetchProduct = usePrefetchProduct();

  const isLoading = isLocationLoading || isProductLoading;
  const isError = isLocationError || isProductError;

  if (invalid || (isError && (locationError?.status === 404 || productError?.status === 404))) {
    return (
      <NotFound
        title="Product or Location Not Found"
        message={`We could not find the requested combination of "${locationSlug}" and "${productSlug}". Please verify the location and product or browse our sitemap.`}
      />
    );
  }

  if (isLoading) {
    return <CityProductPageSkeleton />;
  }

  if (isError) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Unable to load product details</h2>
        <p className="text-gray-600 mb-6 max-w-md">There was a temporary problem communicating with our server. Please try again.</p>
        <button
          onClick={() => refetch()}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm cursor-pointer"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!location || !location.isActive || !product) {
    return (
      <NotFound
        title="Product or Location Not Found"
        message={`We could not find the requested combination of "${locationSlug}" and "${productSlug}". Please verify the location and product or browse our sitemap.`}
      />
    );
  }

  const rawImages = (product.images || []).filter(Boolean);
  const images = rawImages.length > 0 ? rawImages : ["https://www.stroboscopelight.com/heroimage.webp"];
  const relatedProducts = allProducts.filter((p) => p.slug !== product.slug).slice(0, 5);

  // Dynamic city-specific FAQs combined with base product FAQs
  const combinedFaqs = [
    {
      question: `How does ImageTech Industries dispatch and deliver ${product.name} to ${location.name}?`,
      answer: `ImageTech Industries dispatches ${product.name} orders via verified express logistics directly to your printing facility or plant in ${location.name}, ${location.state}. Transit time is typically 2 to 4 business days with full transit insurance and protective shockproof packaging.`,
    },
    {
      question: `Can ImageTech Industries supply custom mounting brackets or fixed web illumination for ${product.name} in ${location.name}?`,
      answer: `Yes. As the direct original equipment manufacturer, ImageTech Industries customizes bracket mounts, external trigger sensors (proximity or photo-reflective), and fixed arrays to match your specific rotogravure, flexo, or slitting line in ${location.name}.`,
    },
    {
      question: `How can I request a quote or technical demo in ${location.name}?`,
      answer: `You can click "Request a Quote" on this page, connect via WhatsApp (+91 8448336036), or call our sales engineering desk. We provide comprehensive technical consultation, operational guidelines, and direct manufacturer pricing for plants in ${location.name}, ${location.state}.`,
    },
    ...(product.faqs || []),
  ];

  const productPriceMap = {
    "led-handheld-model-stroboscope": { price: "12500", sku: "ITI-LED-HAND-01" },
    "led-handheld-model-stroboscope-with-lens": { price: "15500", sku: "ITI-LED-LENS-02" },
    "xenon-flash-tube-hand-held-stroboscope": { price: "14000", sku: "ITI-XENON-HAND-03" },
    "u-tube-fixed-model-stroboscope": { price: "28000", sku: "ITI-UTUBE-FIXED-04" },
    "xenon-flash-tube-for-stroboscope": { price: "4500", sku: "ITI-XENON-TUBE-05" },
    "led-fix-model-stroboscope-iti-400": { price: "32000", sku: "ITI-FIX-400-06" },
  };

  const currentPriceInfo = productPriceMap[product.slug] || {
    price: "12500",
    sku: `ITI-${(product.slug || "STROBO").toUpperCase()}`,
  };

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: `${product.name} in ${location.name}`,
    image: images[0]?.startsWith("http")
      ? images[0]
      : `https://www.stroboscopelight.com${images[0]}`,
    description: `${product.shortDescription || product.shortDesc} Manufactured and supplied by ImageTech Industries in ${location.name}, ${location.state}.`,
    brand: {
      "@type": "Brand",
      name: "ImageTech Industries",
    },
    sku: `${currentPriceInfo.sku}-${location.slug.toUpperCase()}`,
    mpn: `${currentPriceInfo.sku}-${location.slug.toUpperCase()}`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${location.name}, ${location.state}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "130",
      bestRating: "5",
      worstRating: "1",
    },
    offers: {
      "@type": "Offer",
      url: `https://www.stroboscopelight.com/${location.slug}/${product.slug}`,
      priceCurrency: "INR",
      price: currentPriceInfo.price,
      validFrom: "2025-01-01",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "ImageTech Industries",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "INR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "IN",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 2,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 4,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 15,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
  };

  const faqSchema =
    combinedFaqs && combinedFaqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: combinedFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.stroboscopelight.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: location.name,
        item: `https://www.stroboscopelight.com/${location.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${product.name} in ${location.name}`,
        item: `https://www.stroboscopelight.com/${location.slug}/${product.slug}`,
      },
    ],
  };

  return (
    <div className="pt-8 pb-0 bg-[#f8f9fa] min-h-screen font-sans text-gray-900">
      <SEO
        title={`${product.name} in ${location.name} | Best Price & Manufacturer`}
        description={`Buy ${product.name} in ${location.name}, ${location.state} at best manufacturer price from ImageTech Industries. Precision industrial stroboscope light instrument.`}
        image={
          images[0]?.startsWith("http")
            ? images[0]
            : `https://www.stroboscopelight.com${images[0]}`
        }
        keywords={[
          `${product.name} price in ${location.name}`,
          `${product.name} in ${location.name}`,
          `Stroboscope light price in ${location.name}`,
          `Stroboscope instrument ${location.name}`,
          `Best stroboscope light ${location.name}`,
          `${product.name} manufacturer ${location.state}`,
          product.name,
          "Stroboscope light price in India",
          "ImageTech Industries",
        ]}
        schema={[productSchema, faqSchema, breadcrumbSchema].filter(Boolean)}
      />

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex flex-wrap items-center gap-2 text-[14px] font-semibold text-gray-500 mb-6 lg:mb-8 mt-4">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>›</span>
          <Link to={`/${location.slug}`} className="hover:text-blue-600 transition-colors">
            {location.name}
          </Link>
          <span>›</span>
          <span className="text-gray-800">{product.category?.name || "Stroboscopes"}</span>
          <span>›</span>
          <span className="text-gray-800">{product.name} in {location.name}</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4 md:h-[500px] lg:sticky lg:top-32">
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex flex-row md:flex-col gap-3 md:w-20 shrink-0 overflow-x-auto md:overflow-y-auto hide-scrollbar pb-2 md:pb-0">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 md:w-full shrink-0 aspect-square rounded-lg border-2 overflow-hidden transition-all cursor-pointer ${
                      activeImage === idx
                        ? "border-blue-600"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Main Image with Zoom */}
            <div
              className="w-full aspect-square rounded-2xl overflow-hidden bg-white border border-gray-200 relative cursor-zoom-in flex items-center justify-center"
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onMouseMove={handleMouseMove}
            >
              <img
                src={images[activeImage] || images[0]}
                alt={`${product.name} in ${location.name}`}
                className="w-full h-full object-contain transition-transform duration-200 ease-out"
                style={{
                  transform: isZooming ? "scale(2.5)" : "scale(1)",
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col">
            {/* Manufacturer & Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-4 self-start">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Manufactured by ImageTech Industries | Supplying {location.name}, {location.state}</span>
            </div>

            <h1 className="text-[32px] sm:text-[38px] font-black leading-tight text-[#0f172a] mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-1.5 text-blue-600 font-bold text-lg mb-4">
              <MapPin className="w-5 h-5 shrink-0" />
              <span>Direct Supply in {location.name}, {location.state}</span>
            </div>

            <p className="text-base sm:text-[17px] font-medium text-gray-700 leading-relaxed mb-6">
              {product.shortDescription || product.shortDesc}
            </p>

            {/* Feature Highlights */}
            <ul className="space-y-3 mb-8">
              {(product.features && product.features.length > 0
                ? product.features
                : product.keyFeatures || []
              ).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-[15px] sm:text-base font-medium text-gray-800">
                    {feature}
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-[15px] sm:text-base font-medium text-gray-800">
                  Expedited dispatch and verified transit directly to plants across {location.name}
                </span>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("open-quote-modal", {
                      detail: { subject: `Quote for ${product.name} in ${location.name}` },
                    })
                  )
                }
                className="bg-[#1e3a8a] text-white px-8 py-3.5 rounded-lg font-bold text-[13px] hover:bg-[#152960] transition-colors flex items-center gap-2 shadow-md cursor-pointer"
              >
                <Layout className="w-4 h-4" />
                REQUEST A QUOTE FOR {location.name.toUpperCase()}
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`https://wa.me/918448336036?text=Hi, I am interested in purchasing ${encodeURIComponent(
                  product.name
                )} for our facility in ${encodeURIComponent(location.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-green-500 text-green-600 px-8 py-3.5 rounded-lg font-bold text-[13px] hover:bg-green-50 transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
              >
                WHATSAPP US
              </a>
            </div>

            {/* Info Boxes */}
            {product.infoBoxes && product.infoBoxes.length > 0 && (
              <div className="flex flex-wrap gap-x-10 gap-y-6 mt-auto border-t border-gray-200 pt-8">
                {product.infoBoxes.map((box, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="text-orange-500 mt-0.5">
                      {IconMap[box.icon] || <Settings className="w-5 h-5" />}
                    </div>
                    <div>
                      <h5 className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">
                        {box.title}
                      </h5>
                      <p className="text-[14px] font-bold text-gray-900 leading-snug">
                        {box.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-20">
          <div className="flex items-center border-b border-gray-200 mb-8 overflow-x-auto hide-scrollbar">
            {["overview", "specifications", "local-supply"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 text-[14px] font-black uppercase tracking-wider whitespace-nowrap transition-colors relative cursor-pointer ${
                  activeTab === tab ? "text-[#1e3a8a]" : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab === "overview" && "Product Overview"}
                {tab === "specifications" && "Technical Specifications"}
                {tab === "local-supply" && `Supply in ${location.name}`}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1e3a8a] rounded-t-full"></div>
                )}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] min-h-[400px]">
            {activeTab === "overview" && (
              <div className="flex flex-col gap-16">
                <div className="w-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Overview</h3>
                  <div className="space-y-4 mb-8">
                    {product.longDesc ? (
                      <div
                        className="prose max-w-none text-gray-700 prose-headings:font-bold prose-h2:text-2xl prose-h2:mb-4 prose-h3:text-xl prose-h3:mb-3 prose-p:mb-5 prose-p:leading-relaxed prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2"
                        dangerouslySetInnerHTML={{ __html: product.longDesc }}
                      />
                    ) : (
                      <p className="text-[15px] text-gray-400 italic">No overview available.</p>
                    )}
                  </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex items-start gap-4">
                    <Shield className="w-8 h-8 text-blue-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-[15px] mb-1">
                        Industrial Quality Guarantee
                      </h4>
                      <p className="text-[13px] text-gray-600 font-medium">
                        Every stroboscope supplied to {location.name} is calibrated to microsecond flash synchronization tolerances for crystal-clear visual freeze motion during high-speed printing and converting.
                      </p>
                    </div>
                  </div>
                </div>

                {product.overviewFeatures && product.overviewFeatures.length > 0 && (
                  <div className="w-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Engineering Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                      {product.overviewFeatures.map((feat, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                            {IconMap[feat.icon] || <Target className="w-6 h-6 text-blue-600" />}
                          </div>
                          <div>
                            <h4 className="font-bold text-[15px] text-gray-900 mb-1">{feat.title}</h4>
                            <p className="text-[13px] font-medium text-gray-600 leading-relaxed">
                              {feat.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200 bg-blue-50/40">
                        <th className="py-4 px-6 text-[14px] font-bold text-blue-900 w-1/3">
                          Direct Supply Destination
                        </th>
                        <td className="py-4 px-6 text-[14px] font-bold text-blue-900">
                          {location.name}, {location.state} (Direct Factory Dispatch)
                        </td>
                      </tr>
                      {product.specifications?.map((spec, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-gray-200 last:border-0 hover:bg-gray-50"
                        >
                          <th className="py-4 px-6 text-[14px] font-bold text-gray-700 bg-gray-50/50 w-1/3">
                            {spec.label}
                          </th>
                          <td className="py-4 px-6 text-[14px] font-medium text-gray-900">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "local-supply" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Direct Factory Supply & Distribution in {location.name}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base mb-8">
                  ImageTech Industries is a premier manufacturer and technical supplier of {product.name} serving rotogravure printing, flexography, flexible packaging, converting, and slitting operations across {location.name}, {location.state}. With over three decades of precision industrial manufacturing experience, we ensure immediate availability, rigorous calibration, and full technical back-up.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-4">
                      🚚
                    </div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">
                      Fast Track Dispatch to {location.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Units are dispatched within 24-48 hours via secure express courier with transit insurance directly to your plant.
                    </p>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-4">
                      📐
                    </div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">
                      Custom Mounts & Trigger Cables
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Custom fixed mounting brackets, optical trigger sensors, and pulse gear interfaces engineered to fit your exact press.
                    </p>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-4">
                      ⭐
                    </div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">
                      Direct Manufacturer Warranty
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Full 1-year manufacturer warranty, guaranteed spare flash tubes, and dedicated application engineer support.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        {combinedFaqs && combinedFaqs.length > 0 && (
          <div className="mb-20 flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/3 bg-[#0f172a] rounded-2xl p-10 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-black mb-4 leading-tight">
                {location.name} FAQ & Support
              </h3>
              <p className="text-gray-300 font-medium text-[15px] mb-8">
                Find answers regarding delivery timelines, custom configurations, and operation in {location.name}, {location.state}.
              </p>
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("open-quote-modal", {
                      detail: { subject: `Inquiry for ${product.name} in ${location.name}` },
                    })
                  )
                }
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-6 py-3 rounded-lg font-bold text-[13px] transition-colors self-start cursor-pointer"
              >
                ASK A QUESTION
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="w-full lg:w-2/3 bg-white rounded-2xl border border-gray-200 p-2">
              {combinedFaqs.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-100 last:border-0">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
                  >
                    <span className="font-bold text-[15px] text-gray-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <div className="shrink-0 ml-4 text-gray-400 group-hover:text-blue-600 transition-colors">
                      {openFaqIndex === idx ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === idx ? "max-h-56 pb-6 px-6 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[14px] font-medium text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Stroboscopes in City */}
        {relatedProducts.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-black text-gray-900">
                  Other Stroboscopes Available in {location.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Supplied directly by ImageTech Industries with expedited delivery
                </p>
              </div>
              <Link
                to={`/${location.slug}`}
                className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                View All in {location.name} &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {relatedProducts.map((p) => (
                <div
                  key={p.id || p.slug}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="h-40 bg-gray-50 border-b border-gray-100 p-4 flex items-center justify-center">
                    <img
                      src={p.images?.[0] || "https://www.stroboscopelight.com/heroimage.webp"}
                      alt={`${p.title} in ${location.name}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h4 className="font-bold text-[14px] text-gray-900 leading-snug mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {p.title}
                    </h4>
                    <div className="mt-auto pt-4">
                      <Link
                        to={`/${location.slug}/${p.slug}`}
                        onMouseEnter={() => prefetchProduct(p.slug)}
                        className="w-full bg-[#0f172a] hover:bg-blue-700 text-white py-2 rounded-lg text-[12px] font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        VIEW IN {location.name.toUpperCase()}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <HomeCTA locationData={location} />
    </div>
  );
};

export default CityProductPage;
