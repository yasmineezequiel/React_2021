import Card from '../UI/Card';
import './ExpenseItems.css';
import ExpensesFilter from '../Filters/ExpenseFilter';
import React, { useState } from 'react';
import ExpenseItemsList from './ExpenseItemsList';
import ExpensesChart from './ExpensesChart';

const ExpenseItems = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // function responsible for filtering expenses list based on the year
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseItemsList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default ExpenseItems;
