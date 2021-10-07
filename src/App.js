import { useState } from "react";
// Components
import ExpenseList from "./components/ExpenseList";
import Form from "./components/Form";

// styles
import "./components/app.scss";

const INIT_EXPENSES = [
  {
    title: "book",
    amount: 12.99,
    date: new Date("2021", "1", "06"),
    id: Math.random().toString(),
  },
  {
    title: "Toothpaste",
    amount: 13.99,
    date: new Date("2020", "2", "16"),
    id: Math.random().toString(),
  },
  {
    title: "Vitamines",
    amount: 34.99,
    date: new Date("2020", "3", "06"),
    id: Math.random().toString(),
  },
  {
    title: "Movie Rental",
    amount: 3.99,
    date: new Date("2020", "2", "18"),
    id: Math.random().toString(),
  },
  {
    title: "Groceries",
    amount: 44.99,
    date: new Date("2020", "4", "22"),
    id: Math.random().toString(),
  },
  {
    title: "New Car",
    amount: 5299,
    date: new Date("2019", "2", "16"),
    id: Math.random().toString(),
  },
  {
    title: "toothpaste",
    amount: 1.99,
    date: new Date("2022", "1", "06"),
    id: Math.random().toString(),
  },
  {
    title: "book 2",
    amount: 22.99,
    date: new Date("2021", "4", "06"),
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
      <Form onSubmitData={onSubmitData} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
