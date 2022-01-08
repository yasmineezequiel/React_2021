import ExpenseItems from './components/Expenses/ExpenseItems';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // use state to get the current dummy data and update the state with the new expense
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  // this function is to add the new expense as the first element of my Dummy data array
  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItems expenses={expenses} />
    </div>
  );
};

export default App;
