import React from 'react'

const Todos = ({ todos }) => {

    return (
        
        <table className="table table-striped col-md-6">
            <thead>
                <tr>
                    <th>Title</th>
                </tr>
            </thead>

            <tbody>               
                {todos.map((todo) => (
                    <tr>
                        <td>{todo.todo_title}</td>
                        <td>
                            <a href="#">Edit</a> | <a href="#">Delete</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default Todos