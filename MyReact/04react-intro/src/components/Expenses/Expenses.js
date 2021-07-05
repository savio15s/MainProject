import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseFilter2 from "./ExpenseFilter2";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteryear, setFilteryear] = useState("2020");
  const [filterExp, setFilterExp] = useState([]);

  
  const filterChangeHandler = (selectedYear) => {
    console.log("@===>" + selectedYear);
    setFilteryear(selectedYear);
    let filteredExpenses = [];

    filteredExpenses = props.data.filter((el) => {
      return selectedYear == new Date(el.date).getFullYear();
    });

    console.log("filteredExpenses..." + filteredExpenses.length);
    console.log("==ui data==");

    setFilterExp((prev) => {
      return [...filteredExpenses];
    });

  };



  console.log("=============================" + JSON.stringify(filterExp.length));

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteryear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        <h2><ExpensesList data={filterExp}/></h2>
      </Card>
    </div>
  );
};

export default Expenses;
