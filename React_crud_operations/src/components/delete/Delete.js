import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'
function Delete() {
  return (
    <div>
        <h1>Item successfully Deleted</h1>
        <Link to='/read'><Button color="green">Go Back</Button></Link>
    </div>
  )
}

export default Delete