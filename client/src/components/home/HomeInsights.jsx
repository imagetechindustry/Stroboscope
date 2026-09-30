import React from "react";
import { Link } from "react-router-dom";
import { useBlogs } from "../../services/api";
import BlogCard from "../blog/BlogCard";

const FALLBACK_ARTICLES = [
  {
    _id: "fb-1",
    slug: "how-to-choose-the-right-stroboscope",
    title: "How to Choose the Right Stroboscope for Your Application",
    excerpt: "Comprehensive engineering guide to selecting LED vs Xenon stroboscopes based on press speed, flash rate (FPM), and web inspection width.",
    category: "Technical Guide",
    featuredImage: "/STROBOSCOPE/1 . LED HAND MODEL STROBOSCOPE MODEL - 1/1.jpg",
    imageAlt: "LED Handheld Stroboscope Selection",
    publishedAt: "2024-03-15T00:00:00.000Z",
    readTime: "5 min read",
    author: {
      name: "ImageTech Engineering",
      title: "Optical Inspection Specialist",
      avatar: "/logo.png",
    },
  },
  {
    _id: "fb-2",
    slug: "improving-rotogravure-web-inspection",
    title: "Improving Visual Inspection with High-Speed LED Stroboscopes",
    excerpt: "How optical stop-motion freezing prevents expensive doctor blade drag lines and register shifts on rotogravure printing presses.",
    category: "Pressroom Insights",
    featuredImage: "/STROBOSCOPE/4. FIXED MODEL STROBOSCOPE/19.jpg",
    imageAlt: "Rotogravure Web Inspection with Stroboscope",
    publishedAt: "2024-02-28T00:00:00.000Z",
    readTime: "6 min read",
    author: {
      name: "ImageTech Engineering",
      title: "Print Applications Specialist",
      avatar: "/logo.png",
    },
  },
  {
    _id: "fb-3",
    slug: "advancements-in-handheld-led-stroboscopes",
    title: "Advancements in Handheld LED Stroboscopes for Industrial Quality Control",
    excerpt: "Why modern CREE LED arrays and digital tachometer sync have made handheld stroboscopes the industry standard for plant maintenance.",
    category: "Product Technology",
    featuredImage: "/STROBOSCOPE/2. LED HAND MODEL WITH LENS STROBOSCOPE MODEL- 2/1.jpg",
    imageAlt: "Handheld LED Stroboscope Technology",
    publishedAt: "2024-01-15T00:00:00.000Z",
    readTime: "4 min read",
    author: {
      name: "ImageTech Engineering",
      title: "Product Engineer",
      avatar: "/logo.png",
    },
  },
];

const HomeInsights = () => {
  const { data, isLoading } = useBlogs({ limit: 3 });
  const blogs =
    data?.blogs && data.blogs.length > 0
      ? data.blogs.slice(0, 3)
      : FALLBACK_ARTICLES;

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Technical Knowledge Hub
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Insights &amp; Articles
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mt-2 font-normal">
              Practical guides on motion freezing, optical inspection, defect detection, and stroboscope maintenance for printing &amp; industrial operations.
            </p>
          </div>
          <div className="mt-5 md:mt-0 shrink-0">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-blue-600 text-slate-800 hover:text-white font-bold text-xs border border-slate-200 shadow-2xs hover:shadow-md transition-all group"
            >
              <span>Explore All Articles</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Loading state vs Blog Grid */}
        {isLoading && !data ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-white rounded-3xl border border-slate-200 p-6 animate-pulse space-y-4"
              >
                <div className="h-48 bg-slate-100 rounded-2xl w-full" />
                <div className="h-4 bg-slate-100 rounded w-1/3" />
                <div className="h-6 bg-slate-100 rounded w-3/4" />
                <div className="h-4 bg-slate-100 rounded w-full" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((article) => (
              <BlogCard key={article._id || article.slug} blog={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeInsights;
