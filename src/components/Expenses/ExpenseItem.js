import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import React, { useState } from "react";

const ExpenseItem = (props) => {
  //   return React.createElement(
  //     "div",
  //     { className: "expense-item" },
  //     React.createElement(ExpenseDate, { date: props.date }),
  //     React.createElement(
  //       "div",
  //       {},
  //       React.createElement("h1", {}, "expense 1"),
  //       React.createElement("h1", {}, "expense 1")
  //     )
  //   );
  const [title, setTitle] = useState(props.title);
  const [amount, setAddExp] = useState(props.amount);

  const clickHandler = () => {
    setTitle("updated");
    console.log(title);
  };

  const deleteExpenseHandler = (e) => {
    console.log(e.target.parentElement.remove());
    console.log("this expense deleted");
  };

  const changeExpense = () => {
    setAddExp(amount + 100);
    console.log("expenses increased by 100 dollers");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={title} amount={amount} location={props.location} />
      <button onClick={changeExpense}>Add $100</button>
      <button onClick={clickHandler}>changed title!!!!</button>
      <button onClick={deleteExpenseHandler}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
