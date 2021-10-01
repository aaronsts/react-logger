import "./ExpenseItem.scss";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseDescription = "Vitamines";
  const expenseAmount = 35;

  return (
    <div className="expense-item">
      <h2>{expenseDate.toISOString()}</h2>
      <div>
        <h2 className="expense-item-description">{expenseDescription}</h2>
        <p className="expense-item-price">{expenseAmount} euro</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
