import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    const saveEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHanlder = () => {
        setIsEditing(false)
    }
    
    return(
        <div className = "new-expense">
            {!isEditing && <button onClick={saveEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancle={stopEditingHanlder}/>}
        </div>
    )
}
export default NewExpense;