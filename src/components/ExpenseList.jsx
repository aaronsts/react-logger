import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Filter from "./Filter";

const ExpenseList = (props) => {
  // State
  const [filterValue, setFilterValue] = useState("2020");

  // Handlers
  const filterValueHandler = (selectedYear) => {
    setFilterValue(selectedYear);
    console.log(selectedYear);
  };

  return (
    <div>
      <Filter initialYear={filterValue} onChangeFilter={filterValueHandler} />
      <div className="expenses-list">
        <ExpenseItem
          description={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          description={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          description={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          description={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </div>
    </div>
  );
};

export default ExpenseList;
