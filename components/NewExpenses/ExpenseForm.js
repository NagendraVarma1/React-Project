import React, {useState} from 'react';
import './ExpenseForm.css'


const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    const titleChangeHandler = (event) => {
       setEnteredTitle(event.target.value)
    //    console.log(enteredTitle)
        // setUserInput({...userInput, enteredTitle: event.target.value})
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // console.log(enteredAmount);
        // setUserInput({...userInput, enteredAmount: event.target.value})
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // console.log(enteredDate)
        // setUserInput({...userInput, enteredDate: event.target.value})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        let title = enteredTitle;
        let amount = enteredAmount;
        let date = enteredDate;

        let obj = {
            title,
            amount,
            date
        }
        console.log(obj)
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title:</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount:</label>
                    <input type="number" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date:</label>
                    <input type="date"min='2019-01-01' max='2023-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;