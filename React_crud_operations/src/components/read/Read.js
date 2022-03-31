import React, { useEffect,useState } from 'react'
import {Table ,Button} from 'semantic-ui-react'
import axios from 'axios'
import {Link} from 'react-router-dom'
function Read() {
    
const [apidata,setApiData]=useState([])
  useEffect(()=>{
      axios.get('https://62443f533da3ac772b0d3c81.mockapi.io/crud').then((getdata)=>{
          setApiData(getdata.data)
        })
  })
  const setData = (id, firstName, lastName) => {
    localStorage.setItem('ID', id)
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
}

const getData = () => {
    axios.get(`https://62443f533da3ac772b0d3c81.mockapi.io/crud`)
        .then((getData) => {
            setApiData(getData.data);
        })
}
const onDelete = (id) => {
    axios.delete(`https://62443f533da3ac772b0d3c81.mockapi.io/crud/${id}`)
    .then(() => {
        getData();
    })
}
  return (
    <div>
    <Table celled>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
            {apidata.map((data)=>{
                return(
                    <Table.Row>
                        <Table.Cell>{data.id}</Table.Cell>
                        <Table.Cell>{data.firstName}</Table.Cell>
                        <Table.Cell>{data.lastName}</Table.Cell>
                        <Table.Cell><Link to='/update'><Button color="primary" onClick={() => setData(data.id, data.firstName, data.lastName)}>Update</Button></Link></Table.Cell>
                        <Table.Cell><Link to='/delete'><Button color="red" onClick={() =>onDelete(data.id)}>Delete</Button></Link></Table.Cell>
                    </Table.Row>
                )
            })}
        </Table.Body>
  </Table>
    <Link to='/'><Button color="green">Add</Button></Link>
    </div>
  )
}

export default Read