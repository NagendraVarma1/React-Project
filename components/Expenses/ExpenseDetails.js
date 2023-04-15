import React, {useState} from "react";

const ExpenseDetails = (props) => {

  const [title, setTitle] = useState(props.title)

  const [amount, setAmount] = useState(props.amount)

  const clickHandler = () => {
    setTitle("Updated!!!")
    console.log(title);
    
  }

  const changeHandler = () => {
    setAmount('100');
    console.log(amount);
  }

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div>{props.location}</div>
      <div className="expense-item__price">${amount}</div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={changeHandler}>Change Amount</button>
    </div>
  );
}
export default ExpenseDetails;
