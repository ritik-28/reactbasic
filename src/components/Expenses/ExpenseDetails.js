import React from "react";
import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <p>{props.location}</p>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
};

export default ExpenseDetails;
