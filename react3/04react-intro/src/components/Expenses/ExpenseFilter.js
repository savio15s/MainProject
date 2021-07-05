import React from "react";
import "./ExpenseFilter.css";

export default function ExpenseFilter(props) {

    console.log("%%%" + props.selected);
  const onItemSelectHandler = (event) => {
      console.log("==>" + event.target.value);
      props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Select a Year</label>
        <select value={props.selected} onChange={onItemSelectHandler}>
          <option value="2000">2000</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
}
