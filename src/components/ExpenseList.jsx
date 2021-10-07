import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem.jsx";
import Filter from "./Filter";
import Chart from "./Chart.jsx";

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
    <div className="expenses-list">
      <Filter initialYear={filterValue} onChangeFilter={filterValueHandler} />
      <Chart expenses={filteredExpenses} />

      <div className="expenses">
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
