import { configureStore } from "@reduxjs/toolkit";
import caseStudiesReducer from "../features/caseStudies/caseStudiesSlice";

export const store = configureStore({
  reducer: {
    caseStudies: caseStudiesReducer,
  },
});
