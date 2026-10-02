export const selectFilteredCaseStudies = (state) => {
  const { items, filters } = state.caseStudies;
  const { category, query } = filters;

  const search = query.trim().toLowerCase();

  return items.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;

    const matchesSearch =
      item.title.toLowerCase().includes(search) || item.summary.toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });
};

export const selectVisibleCount = (state) => {
  return selectFilteredCaseStudies(state).length;
};
