import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css"

const ExpenseList = (props) => {
    

    if(props.items.length === 0) {
        return <h2 className="expense-list__fallback">Found No Expenses</h2>
    }
    else if(props.items.length === 1) {
        return <ul className="expense-list">
        {props.items.map((data) => {
          return (
            <div>
              <ExpenseItem
                key={data.id}
                title={data.title}
                amount={data.amount}
                date={data.date}
                location={data.location}
              ></ExpenseItem>
              <h2 className="expense-list__fallback">Only single Expense here. Please add More...</h2>
            </div>
          );
        })};
      </ul>
    }
  
  return <ul className="expense-list">
    {props.items.map((data) => {
      return (
        <div>
          <ExpenseItem
            key={data.id}
            title={data.title}
            amount={data.amount}
            date={data.date}
            location={data.location}
          ></ExpenseItem>
        </div>
      );
    })};
  </ul>
}
export default ExpenseList;