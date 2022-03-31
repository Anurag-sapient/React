import './App.css';
import Create from './components/create/Create';
import Read from './components/read/Read';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Update from './components/update/Update';
import React from 'react'
import Delete from './components/delete/Delete';

function App() {
  return (
    <Router>
      <div >
         <div> <h3 className="texts">React Crud Operations</h3></div>
         
        <div className="form-css">
        <Route exact path='/' component={Create} />
        <Route exact path='/read' component={Read} />

        <Route path='/update' component={Update} />
        <Route path='/delete' component={Delete} />
        </div>
      </div>
    </Router>
  );
}

export default App;