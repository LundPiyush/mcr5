import { recipes } from "../data";
export const recipeReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_SEARCH":
      return { ...state, searchFilter: payload };
    case "SET_RADIO":
      return { ...state, radioFilter: payload };
    default:
      return state;
  }
};

export const initialFilter = {
  recipes: recipes,
  searchFilter: "",
  radioFilter: "name",
};
