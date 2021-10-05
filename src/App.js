import { useState } from "react";
// Components
import ExpenseList from "./components/ExpenseList";
import Form from "./components/Form";

const INIT_EXPENSES = [
  {
    title: "book",
    amount: 12.99,
    date: new Date("2021", "1", "06"),
    id: Math.random().toString(),
  },
];

function App() {
  // State
  const [expenses, setExpenses] = useState(INIT_EXPENSES);

  const onSubmitData = (newExpenseData) => {
    const expense = {
      ...newExpenseData,
      id: Math.random().toString(),
    };

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="container">
      <h2>Expenses</h2>
      <Form onSubmitData={onSubmitData} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
