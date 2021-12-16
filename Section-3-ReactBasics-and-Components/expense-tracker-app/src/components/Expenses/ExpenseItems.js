import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItems.css";

const ExpenseItems = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem key={id} title={title} amount={amount} date={date} />
      ))}
    </Card>
  );
};

export default ExpenseItems;
