import { createContext, useContext, useReducer } from "react";
import { initialFilter, recipeReducer } from "../reducer/recpie-reducer";

const FilterContext = createContext(null);
export const FilterProvider = ({ children }) => {
  const [recipesFilter, setRecipesFilter] = useReducer(
    recipeReducer,
    initialFilter
  );

  return (
    <FilterContext.Provider value={{ recipesFilter, setRecipesFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
