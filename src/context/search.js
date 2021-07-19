import React, { useContext } from 'react';

const SearchContext = React.createContext([]);

export default SearchContext;
export const useSearchContext = () => useContext(SearchContext);
