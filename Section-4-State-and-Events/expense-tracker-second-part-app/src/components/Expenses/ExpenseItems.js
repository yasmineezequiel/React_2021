import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './ExpenseItems.css';
import ExpensesFilter from '../Filters/ExpenseFilter';
import React, { useState } from 'react';

const ExpenseItems = (props) => {
  const [filterYear, setFilterYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.expenses.map(({ id, title, amount, date }) => (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        ))}
      </Card>
    </div>
  );
};

export default ExpenseItems;
