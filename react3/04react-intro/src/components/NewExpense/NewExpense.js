import React from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {

    const onSaveExpensesHandler = (expData) => {
       
        const savedObject = {
            ...expData,
            id:Math.random().toString()
        };
        console.log("======Data Bubble.." + JSON.stringify(savedObject));
        props.onNewExpenseAdd(savedObject);
    };



    return (
        <div className="new-expense">
           <ExpenseForm onSaveExpense={onSaveExpensesHandler}/>
        </div>
    )
}

export default NewExpense;
