import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpenses/NewExpense";
import React,{useState} from "react";

const App = () => {
  const expenses = [
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
  const [allExpenses, setAllExpenses] = useState(expenses)
  const addExpenseHandler = (expense) => {
    setAllExpenses((prevExpenses) => {
      return [...prevExpenses, expense]
    })
   
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      {allExpenses.map(data => {
        return (
          <ExpenseItem
            
            title={data.title}
            amount={data.amount}
            date={data.date}
            location={data.location}
          ></ExpenseItem>
        );
      })}
    </div> 
  );
}

export default App;

