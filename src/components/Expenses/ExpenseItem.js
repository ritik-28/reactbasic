import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import React from "react";

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

  const clickHandler = () => {
    console.log("clicked!!!!!!!!");
  };

  const deleteExpenseHandler = (e) => {
    console.log(e.target.parentElement.remove());
    console.log("this expense deleted");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      <button onClick={clickHandler}>changed title!!!!</button>
      <button onClick={deleteExpenseHandler}>Delete</button>
    </div>
  );
};

export default ExpenseItem;
