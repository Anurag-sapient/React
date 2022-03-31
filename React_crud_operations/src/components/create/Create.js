import axios from 'axios';
import React,{useState} from 'react'
import { Button, Form } from 'semantic-ui-react'

import { Link,useHistory } from 'react-router-dom'


function Create() {
    let history = useHistory();
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  
    console.log(firstName);
    console.log(lastName);
  
  const sendDataToApi=()=>{
      axios.post(`https://62443f533da3ac772b0d3c81.mockapi.io/crud`,{firstName,lastName}).then(() => {
        history.push('/read')
      });
  }
  return (
    <div>
    <Form>
        <Form.Field>
            <label>First Name</label>
            <input name="fname" placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input name="lname" placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)} />
        </Form.Field>
        <Button type='submit' color="green" onClick={sendDataToApi}>Submit</Button>
        <Link to='/read'><Button color="facebook">Read</Button></Link>
    </Form>
    
    </div>
  )
}

export default Create