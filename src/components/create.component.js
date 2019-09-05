import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeTodoTitle = this.onChangeTodoTitle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_title: ''
        }
    }
    onChangeTodoTitle(e) {
        this.setState({
            todo_title: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            todo_title: this.state.todo_title,
        };
        axios.post('https://tbi50kh7ll.execute-api.us-east-2.amazonaws.com/Prod/todo', JSON.stringify(obj))
            .then(res => console.log(res.data));

        this.setState({
            todo_title: ''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Add New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Todo Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.todo_title}
                            onChange={this.onChangeTodoTitle}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Register Todo"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}