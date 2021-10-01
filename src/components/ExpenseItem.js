import "./ExpenseItem.scss";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <h2>29 September 2021</h2>
      <div>
        <h2 className="expense-item-description">Vitamines</h2>
        <h3 className="expense-item-price">35 euro</h3>
      </div>
    </div>
  );
}

export default ExpenseItem;
