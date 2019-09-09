import React from 'react'
import axios from 'axios';
class Todos extends React.Component {
    state = {
        todos: []
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
                console.log(data);
                this.getTodos();
            })
            .catch(console.log)
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
                            <td>{todo.todo_title}</td>
                            <td>
                                <button onClick={() => this.deleteTodo(todo.todo_id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
    
};

export default Todos