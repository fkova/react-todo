import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Todos from './components/todos';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    
    axios.get('https://tbi50kh7ll.execute-api.us-east-2.amazonaws.com/Prod/todo')
      .then((data) => {
        console.log(data.data.Items);
        this.setState({ todos: data.data.Items })
      })
      .catch(console.log)
           
/*
    axios.delete('https://tbi50kh7ll.execute-api.us-east-2.amazonaws.com/Prod/todo/23')
      .then((data) => {
        console.log(data);
      })
      .catch(console.log)
*/
  }

  render() {
    return (
      <div className="container">
        <h2>Todo App</h2>

        <form>
          <div className="form-group col-md-6">
            <label>Add Todo</label>
            <input className="form-control" type="text" id="todo_title"/>
            <br></br>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>  
        </form>
        <br/>
        
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
