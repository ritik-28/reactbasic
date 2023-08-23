import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enterdTitle: "",
  //   enterdAmount: "",
  //   enterdDate: "",
  // });

  const titleChangeHandler = (e) => {
    setEnterdTitle(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   enterdTitle: e.target.value,
    // });

    //new way for many states in one
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enterdTitle: e.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (e) => {
    setEnterdAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdAmount: e.target.value,
    // });
  };

  const dateChangeHandler = (e) => {
    setEnterdDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdDate: e.target.value,
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Ttile</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
