import { useState } from "react";
import "./App.css";
import Expenses from "./hm-3/expenses/Expenses";
import NewExpense from "./hm-3/new-expense/New-expense";

function App() {
  const [expenses, setExpenses] = useState([]);
  const addNewExpenseHandler = (data) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.push(data);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <NewExpense onNewExpenseAdd={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

//! REACT
//? components:
// 1.func,
// 2.return JSX,
// 3.start with capital letter,
// 4.Noun/сущес,
// 5.JSX should have parent element,

//? reactive (state, VDom)
