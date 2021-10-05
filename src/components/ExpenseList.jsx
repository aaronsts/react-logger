import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.jsx";
import Filter from "./Filter";

const ExpenseList = (props) => {
  // State
  const [filterValue, setFilterValue] = useState("2020");

  // Handlers
  const filterValueHandler = (selectedYear) => {
    setFilterValue(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filterValue;
  });

  return (
    <div>
      <Filter initialYear={filterValue} onChangeFilter={filterValueHandler} />
      <div className="expenses-list">
        {filteredExpenses.length === 0 ? (
          <p>No expenses found.</p>
        ) : (
          filteredExpenses.map((item) => {
            return (
              <ExpenseItem
                description={item.title}
                amount={item.amount}
                date={item.date}
                key={item.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
