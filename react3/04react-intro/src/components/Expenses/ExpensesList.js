import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

function ExpensesList(props) {

    if (props.data.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>
  }

  return (
   <ul className="expenses-list">
    {
        props.data.map((el) => (
        <ExpenseItem
            key={el.id}
            title={el.title}
            amount={el.amount}
            date={el.date}
        />
        ))
    }
   </ul>
  );
}

export default ExpensesList;
