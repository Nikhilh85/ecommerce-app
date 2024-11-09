import React, { useState } from "react";
import { FilterContext } from "./filterContext";

const FilterState = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  return (
    <FilterContext.Provider
      value={{ searchValue, setSearchValue, categoryValue, setCategoryValue }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterState;
