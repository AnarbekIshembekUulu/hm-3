import "./expenses.css";
import ExpenseList from "../expenseList/ExpenseList";

const Expenses = (props) => {
  return (
    <div>
      <ExpenseList expenses={props.expenses}/>
    </div>
  );
};

export default Expenses;
