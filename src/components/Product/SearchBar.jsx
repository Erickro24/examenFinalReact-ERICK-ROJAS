const SearchBar = ({
    // eslint-disable-next-line react/prop-types
    filterText,
    // eslint-disable-next-line react/prop-types
    inStockOnly,
    // eslint-disable-next-line react/prop-types
    onFilterTextChange,
    // eslint-disable-next-line react/prop-types
    onInStockOnlyChange
  }) => {
    return (
      <form>
        <input 
          type="text" 
          value={filterText} placeholder="Search..." 
          onChange={(e) => onFilterTextChange(e.target.value)} />
        <label>
          <br/>
          <input 
            type="checkbox" 
            checked={inStockOnly} 
            onChange={(e) => onInStockOnlyChange(e.target.checked)} />
          {' '}
          Only show products in stock
        </label>
      </form>
    );
  };
  
  export default SearchBar;