import "./ExpenseItem.scss";

function ExpenseItem(props) {
  const date = {
    day: props.date.toLocaleString("en-US", { day: "2-digit" }),
    month: props.date.toLocaleString("en-US", { month: "long" }),
    year: props.date.getFullYear(),
  };

  return (
    <div className="expense-item">
      <div>
        <div>{date.day}</div>
        <div>{date.month}</div>
        <div>{date.year}</div>
      </div>
      <div>
        <h2 className="expense-item-description">{props.description}</h2>
        <p className="expense-item-price">{props.amount} euro</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
