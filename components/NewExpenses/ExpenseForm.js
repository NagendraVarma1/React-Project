import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");

  //INSTEAD OF WRITING USESTATE FOR 3 TIMES WE CAN ALSO WRITE IT AS ----->
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // })
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //    console.log(enteredTitle)

    // WE CAN UPDATE THE STATE USING THIS (IF WE WRITE USESTATE FOR 1 TIME)
    // (1ST APPROACH) 
    // setUserInput({...userInput, enteredTitle: event.target.value})
    // (2ND APPROACH)
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value}
    // })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(enteredAmount);
    // setUserInput({...userInput, enteredAmount: event.target.value})
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(enteredDate)
    // setUserInput({...userInput, enteredDate: event.target.value})
  };
  const locationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    let title = enteredTitle;
    let amount = +enteredAmount;
    let date = new Date(enteredDate);
    let location = enteredLocation;

    let expenseData = {
      title,
      amount,
      date,
      location
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredLocation('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title:</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Location:</label>
          <input
            type="text"
            value={enteredLocation}
            onChange={locationChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancle}>Cancle</button>
        <button type="submit">Add Expense</button>

      </div>
    </form>
  );
};

export default ExpenseForm;
