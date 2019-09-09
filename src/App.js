import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Todos from './components/todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todo_title: '' };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.todo_title.value);
    axios.post('https://tbi50kh7ll.execute-api.us-east-2.amazonaws.com/Prod/todo',
      {
        todo_title: event.target.todo_title.value
      }
    ).then((data) => {
      window.location.reload(false);
    }).catch(console.log)
  }

  render() {
    return (
      <div className="container">
        <h2>Todo App</h2>

        <form onSubmit={this.mySubmitHandler}>
          <div className="form-group col-md-6">
            <label>Add Todo</label>
            <input className="form-control" type="text" name="todo_title"/>
            <br></br>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>  
        </form>
        <br/>
        
        <Todos />
      </div>
    );
  }
}

export default App;
