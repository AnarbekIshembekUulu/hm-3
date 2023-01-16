import React from 'react'
import ExpenseItem from '../expense-item/ExpenseItem';

function ExpenseList(props) {
  return (
    <div>  
         <ul className="expenses">
      {props.expenses.map((elem) => {
        return (
          <ExpenseItem
            key={elem.title}
            price={elem.price}
            title={elem.title}
            date={elem.date}
          />
        );
      })}
    </ul>
    </div>
  )
}

export default ExpenseList