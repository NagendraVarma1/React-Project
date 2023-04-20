//import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpenses/NewExpense";
import React, { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import ExpenseList from "./components/Expenses/ExpenseList";
import ExpenseChart from "./components/Expenses/ExpenseChart";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    location: "Store",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    location: "Store",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    location: "Car ShowRoom",
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 450,
    date: new Date(2021, 5, 12),
    location: "Store",
  },
];
const App = () => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [allExpenses, setAllExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setAllExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = allExpenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </div>
  );
};

export default App;
