import React from 'react'
import axios from 'axios';
class Todos extends React.Component {
    state = {
        todos: [],
        newText: ''
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos = () => {
        axios.get('https://tbi50kh7ll.execute-api.us-east-2.amazonaws.com/Prod/todo')
            .then((data) => {
                console.log(data.data.Items);
                this.setState({ todos: data.data.Items })
            })
            .catch(console.log)
    }

    deleteTodo = (id) =>{
        axios.delete('https://tbi50kh7ll.execute-api.us-east-2.amazonaws.com/Prod/todo/'+id)
            .then((data) => {
                this.getTodos();
            })
            .catch(console.log)
    }

    updateTodo = (id) => {
        axios.put('https://tbi50kh7ll.execute-api.us-east-2.amazonaws.com/Prod/todo/' + id,
            {
                todo_title: this.state.newText
            }
        )
        .then((data) => {
            this.getTodos();
        })
        .catch(console.log)
    }

    setText = (e) =>{
        this.setState({ newText: e.target.value });
    }

    render(){
        return (
            <table className="table table-striped col-md-6">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Methods</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.todos.map((todo) => (
                        <tr>
                            <td><input type="text" defaultValue={todo.todo_title} onChange={this.setText}></input></td>
                            <td>
                                <button className="btn btn-primary" onClick={() => this.updateTodo(todo.todo_id)}>Update</button>
                                &nbsp;
                                <button className="btn btn-danger" onClick={() => this.deleteTodo(todo.todo_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
};

export default Todos