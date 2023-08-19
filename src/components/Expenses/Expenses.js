import ExpenseItem from "./ExpenseItem";
import React from "react";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const location = ["jaipur", "kanpur", "varanasi", "gurugram"];
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
        location={location[0]}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
        location={location[1]}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
        location={location[2]}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
        location={location[3]}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
