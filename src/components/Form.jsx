import React, { useState } from "react";

const Form = (props) => {
  // State
  const [enteredText, setEnteredText] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Handlers
  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredText,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSubmitData(expenseData);

    setEnteredText("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-wrapper">
        <div className="form-input">
          <label>Title</label>
          <input type="text" value={enteredText} onChange={textChangeHandler} />
        </div>
        <div className="form-input">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="form-input">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2018-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="form-submit">
        <input type="submit" value="submit" />
      </div>
    </form>
  );
};

export default Form;
