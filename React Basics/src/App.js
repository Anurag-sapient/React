import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpenses/NewExpense';
let expenses=[
  {
    id:'e1',title:'School fee',amount:250,date:new Date(2021,3,28)
  },
  {
    id:'e2',title:'tution fee',amount:150,date:new Date(2021,3,28)
  },
  {
    id:'e3',title:'house rent',amount:350,date:new Date(2021,3,2)
  },
  {
    id:'e4',title:'food',amount:100,date:new Date(2021,4,5)
  }
];
function App() {
  // let expenseDate=new Date(2021,3,28)
  // let expenseTitle = 'school fees'
  // let expenseAmount=300
  
  let [expenseVar,expenseSet]=useState(expenses)
  const expenseHander=(expense)=>{
    console.log(expense)
    expenseSet([expense,...expenseVar])

  }
  return (
    <div>
      <h1><center>Lets get started with the expenses</center></h1>
      {/* to get expenses from children to parent function passed and its arguements contain the rquired object we got from children */}
      <NewExpense addExpense={expenseHander}/>
      <Expenses item={expenseVar}/>
    </div>
  );
}

export default App;
