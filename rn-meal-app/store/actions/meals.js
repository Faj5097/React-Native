export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};

export const SET_FILTERS = "SET_FILTERS";

export const setFilters = (filters) => {
  return { type: SET_FILTERS, filters: filters };
};
