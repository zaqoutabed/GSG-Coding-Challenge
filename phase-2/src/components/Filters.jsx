const Filters = ({ filters, currentFilter, setCurrentFilter }) => {
    const handleOnChange = (ev) => {
        const value = ev.target.value;
        setCurrentFilter(value !== "All" ? value: undefined)
    }
  return (
    <div id="filters">
      <label htmlFor="select-filters">Filter Products:</label>
      <select id="select-filters" name="select-filters" onChange={handleOnChange} defaultValue={currentFilter}>
        <option>
          All
        </option>
        {filters.map((filter) => (
          <option value={filter} key={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
