import React, { useState } from "react";
import "./ExpenseItem.scss";

function ExpenseItem(props) {
  const date = {
    day: props.date.toLocaleString("en-US", { day: "2-digit" }),
    month: props.date.toLocaleString("en-US", { month: "long" }),
    year: props.date.getFullYear(),
  };

  const [newTitle, setNewTitle] = useState(props.description);

  const clickHandler = (even) => {
    setNewTitle("Hello There");
  };

  return (
    <div className="expense-item">
      <div>
        <div>{date.day}</div>
        <div>{date.month}</div>
        <div>{date.year}</div>
      </div>
      <div>
        <h2 className="expense-item-description">{newTitle}</h2>
        <p className="expense-item-price">{props.amount} euro</p>
      </div>
      <div>
        <a href="#" onClick={clickHandler}>
          Change me
        </a>
      </div>
    </div>
  );
}

export default ExpenseItem;
