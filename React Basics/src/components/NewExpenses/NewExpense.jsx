import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense =(props)=>{
    const saveData =(childData)=>{
        const expenseData = {
            ...childData,
            id:Math.random().toString
        }
        console.log(expenseData)
        props.addExpense(expenseData)
    }
    return (
        <div className="new-expense">
            {/* sending function to child so could be used by props and give us value */}
            <ExpenseForm onGetData={saveData}/>
        </div>
    );
}
export default NewExpense


