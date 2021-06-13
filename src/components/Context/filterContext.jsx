import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

export const FilterContext = createContext(null);

const FilterContextProvider = (props) => {
  const states = useMemo(
    () => ({
      function: {},
    }),
    []
  );

  useEffect(() => {}, []);

  return (
    <FilterContext.Provider value={{ states }}>
      {props.children}
    </FilterContext.Provider>
  );
};

FilterContextProvider.propTypes = {
  children: PropTypes.node,
};

export default FilterContextProvider;
