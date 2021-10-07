const Filter = (props) => {
  const changeYearHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };

  return (
    <div className="filter-control">
      <label>Filter by year</label>
      <select value={props.initialYear} onChange={changeYearHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default Filter;
