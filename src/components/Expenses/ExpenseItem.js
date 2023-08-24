import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAddExp] = useState(props.amount);

  const clickHandler = () => {
    setTitle("updated");
  };

  const deleteExpenseHandler = (e) => {
    console.log(e.target.parentElement.remove());
  };

  const changeExpense = () => {
    setAddExp(amount + 100);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={title} amount={amount} />
      <button onClick={changeExpense}>Add $100</button>
      <button onClick={clickHandler}>changed title!!!!</button>
      <button onClick={deleteExpenseHandler}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
