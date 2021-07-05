import React, { useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("0");
  // const [enteredDate, setEnteredDate] = useState("");

  const [userinput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const tileChangeHandler = (event) => {
    console.log("Title Changed..." + event.target.value);
    // setUserInput({
    //   ...userinput,
    //   enteredTitle: target.event.value,
    // });

    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    console.log("Amount Changed..." + event.target.value);
    // setUserInput({
    //   ...userinput,
    //   enteredAmount: target.event.value,
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    console.log("Date Changed..." + event.target.value);
    // setUserInput({
    //   ...userinput,
    //   enteredDate: target.event.value,
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    console.log("==========================form submit");
    event.preventDefault();

    const submittedData = {
      title: userinput.enteredTitle,
      amount: userinput.enteredAmount,
      date: new Date(userinput.enteredDate),
    };

    console.log(submittedData);

    props.onSaveExpense(submittedData);

    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={userinput.enteredTitle}
              onChange={tileChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={userinput.enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={userinput.enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
