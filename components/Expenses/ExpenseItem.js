import React, {useState} from "react";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [isDeleted, setIsDeleted]= useState(false);
  const deleteHandler = () => {
    setIsDeleted(true);
    console.log('Deleted');
  };

  if(isDeleted){
    return null;
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      <button onClick={deleteHandler} className="btn">Delete Expenses</button>
    </Card>
  );
}

export default ExpenseItem;
