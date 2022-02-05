import React,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    // let title = props.title

    //taking input and give it as title
    let [inpTitle,setInpTitle]=useState("write to change title")//blank insures no value currently given to it

    const changeHandler=(event)=>{
        setInpTitle(event.target.value);
    }

    //this return a variable, function to change that variable
    let [title,setTitle] = useState(props.title)
    const ClickHandler =()=>{
        // this is wrong way and state will not be updated
        // title='title changed'
        // console.log(title)

        //using function we can give any value to that title variable created for us by useState
        setTitle("title changed")

        setTitle(inpTitle)
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={new Date(props.date)} />
            <div className="expense-item__description">
                <h2>{ title }</h2>
                <div className="expense-item__price">$ { props.amount }</div>
            </div>
            {/* for input to refelect changes we need to add onChange function to update variable written in input */}
            <input type="text"  value={inpTitle} onChange={changeHandler}/>
            <button onClick={ClickHandler} >Change Title</button>
        </Card>
        
    );
}
export default ExpenseItem;