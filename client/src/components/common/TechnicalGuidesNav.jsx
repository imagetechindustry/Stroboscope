import React from "react";
import { Link, useLocation } from "react-router-dom";

const guides = [
  {
    name: "Selection & Sizing",
    slug: "/selection-guide",
    badge: "Calculator",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Working Principle",
    slug: "/working-principle",
    badge: "Physics",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: "Press Applications",
    slug: "/press-applications",
    badge: "6 Sectors",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: "Troubleshooting Guide",
    slug: "/troubleshooting-guide",
    badge: "Defect Finder",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
];

export default function TechnicalGuidesNav() {
  const location = useLocation();

  return (
    <div className="bg-white border border-blue-100 rounded-2xl p-2 sm:p-2.5 shadow-sm mb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {guides.map((guide) => {
          const isActive = location.pathname === guide.slug;
          return (
            <Link
              key={guide.slug}
              to={guide.slug}
              className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <span className={isActive ? "text-blue-200" : "text-blue-600"}>{guide.icon}</span>
                <span className="truncate">{guide.name}</span>
              </div>
              <span
                className={`ml-2 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-extrabold shrink-0 hidden sm:inline-block ${
                  isActive ? "bg-white/20 text-white" : "bg-white text-blue-700 border border-blue-200"
                }`}
              >
                {guide.badge}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
