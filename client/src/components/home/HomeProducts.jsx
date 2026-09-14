import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "LED Handheld Stroboscope",
    description:
    "Rechargeable battery-operated inspection device used to check high-speed moving and rotating parts without stopping the machine.",
    image: "/STROBOSCOPE/1 . LED HAND MODEL STROBOSCOPE MODEL - 1/1.jpg",
    link: "/products/led-handheld-stroboscope",
    externalLink: "https://www.imagetechindustries.com/products/led-handheld-model-stroboscope",
  },
  {
    id: 2,
    title: "LED Handheld Stroboscope with Lens",
    description:
    "Rechargeable battery-operated inspection device for checking high-speed moving and rotating parts in printing and industrial machines.",
    image: "/STROBOSCOPE/2 . LED HAND HELD STROBOSCOPE MODEL  2/11.jpg",
    link: "/products/led-handheld-stroboscope-with-lens",
    externalLink: "https://www.imagetechindustries.com/products/led-handheld-model-stroboscope-with-lens",
  },
  {
    id: 3,
    title: "Xenon Flash Tube Stroboscope",
    description:
    "Portable inspection device designed for viewing high-speed moving and rotating parts while the machine is running.",
    image: "/STROBOSCOPE/3 . U TUBE HAND MODEL STROBOSCOPE/14.jpg",
    link: "/products/xenon-flash-tube-hand-held-stroboscope",
    externalLink: "https://www.imagetechindustries.com/products/xenon-flash-tube-hand-held-stroboscope",
  },
  {
    id: 4,
    title: "U Tube Fixed Model Stroboscope",
    description:
    "Machine-mounted inspection system designed for continuous web inspection and synchronization in printing, packaging and converting machines.",
    image: "/STROBOSCOPE/4. FIXED MODEL STROBOSCOPE/19.jpg",
    link: "/products/u-tube-fixed-model-stroboscope",
    externalLink: "https://www.imagetechindustries.com/products/u-tube-fixed-model-stroboscope",
  },
];

const HomeProducts = ({ locationData }) => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <h4 className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2">
              Our Products
            </h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Advanced Stroboscope Solutions{locationData ? ` in ${locationData.name}` : ''}
            </h2>
            <p className="mt-4 text-lg text-gray-900 max-w-2xl">
              A wide range of high-performance stroboscopes designed for visual inspection of high-speed moving and rotating parts in printing and industrial processes.
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <a
              href="https://www.imagetechindustries.com/products"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 border border-blue-200 bg-white hover:bg-blue-50 px-6 py-2.5 rounded-full font-semibold transition-colors shadow-sm"
            >
              View All Products
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-shadow group flex flex-col h-full"
            >
              <a href={product.externalLink} target="_blank" rel="noopener noreferrer" className="block group/link cursor-pointer">
                <div className="bg-gray-100 rounded-xl mb-6 overflow-hidden aspect-square flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover mix-blend-multiply group-hover/link:scale-105 transition-transform duration-500 rounded-lg shadow-sm"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover/link:text-blue-600 transition-colors">
                  {product.title}{locationData ? ` in ${locationData.name}` : ''}
                </h3>
              </a>
              <p className="text-gray-900 text-sm mb-6 flex-grow">
                {product.description}
              </p>
              <Link
                to={locationData ? `/${locationData.slug}${product.link.replace('/products', '')}` : product.link}
                className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors mt-auto"
              >
                View Details
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
