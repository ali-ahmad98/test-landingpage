import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cards from "./Cards";

import { fetchCaseStudies, setCategory, setQuery } from "../features/caseStudies/caseStudiesSlice";

import {
  selectFilteredCaseStudies,
  selectVisibleCount,
} from "../features/caseStudies/caseStudiesSelectors";

const categories = ["All", "Web", "Mobile", "AI", "Blockchain"];

const Explore = () => {
  const dispatch = useDispatch();

  const { status, error, filters } = useSelector((state) => state.caseStudies);

  const items = useSelector(selectFilteredCaseStudies);
  const count = useSelector(selectVisibleCount);

  // Fetch case studies when component mounts
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCaseStudies());
    }
  }, [dispatch, status]);

  return (
    <section id="case-study" className="container mx-auto relative px-4 py-20 lg:py-32">
      {/* Heading and Filters */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-6 text-white mb-10">
        <h1 className="text-3xl font-semibold">Case Studies</h1>

        {/* Category Filters */}
        <ul className="flex flex-wrap justify-center gap-2 lg:gap-4">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => dispatch(setCategory(category))}
                className={`cursor-pointer rounded-lg py-2 px-3 transition-all duration-200 ${
                  filters.category === category
                    ? "bg-gradient-to-r from-[#FC466B]/60 to-[#3F5EFB]/60 text-white"
                    : "hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Search */}
        <input
          type="text"
          value={filters.query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          placeholder="Search projects..."
          className="w-full lg:w-64 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-purple-500"
        />
      </div>

      {/* Loading Skeleton */}
      {status === "loading" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="animate-pulse rounded-xl bg-white/10 p-5">
              <div className="h-40 bg-white/10 rounded-lg mb-4" />
              <div className="h-5 bg-white/10 rounded w-3/4 mb-3" />
              <div className="h-4 bg-white/10 rounded w-full" />
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {status === "failed" && (
        <div className="text-center py-16 text-white">
          <p className="text-red-400 mb-4">{error || "Something went wrong."}</p>

          <button
            onClick={() => dispatch(fetchCaseStudies())}
            className="px-6 py-2 bg-[#6318F1] rounded-full hover:bg-purple-700 transition"
          >
            Retry
          </button>
        </div>
      )}

      {/* Case Studies */}
      {status === "succeeded" && (
        <>
          {count === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <h3 className="text-xl font-semibold mb-2">No Case Studies Found</h3>

              <p>Try changing your search or category filter.</p>
            </div>
          ) : (
            <div>
              {status === "succeeded" && (
                <p className="pl-48 text-gray-400 mb-6">Showing {count} projects</p>
              )}
              <div className="flex flex-wrap gap-x-10  gap-y-10 mt-10 justify-center px-20">
                {items.map((item) => (
                  <Cards key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Explore;
