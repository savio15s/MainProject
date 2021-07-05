import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import React,{useState} from "react";
import INIT_EXPENSES from './components/Expenses/InitialExpenses';
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  
  const [initExpenses, setInitExpenses] = useState(INIT_EXPENSES);

  // return React.createElement(
  //   "div",
  //   {},
  //     React.createElement("h2", {}, "Let's get started!"),
  //     React.createElement(Expenses, {data:expenses})
  // );

  //return (
  // <div>
  //   <h2>Let's get started!</h2>
  //   <Expenses data={expenses}></Expenses>
  // </div>
  //);

  const addExpenseHandler = (enteredExpense)=>{
    const addExpData = {
      ...enteredExpense
    };

    console.log("IN APP JS,," + addExpData);

    setInitExpenses(prev => {
      return [addExpData,...prev];
    });

  };
  
  return (
   <div>
     <NewExpense onNewExpenseAdd = {addExpenseHandler}/>
     <Expenses data={initExpenses}></Expenses>
   </div>
  );
}

export default App;
