import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeTodoTitle = this.onChangeTodoTitle.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_title: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/business/edit/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_title: response.data.todo_title
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeTodoTitle(e) {
        this.setState({
            todo_title: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            todo_title: this.state.todo_title
        };
        axios.post('https://tbi50kh7ll.execute-api.us-east-2.amazonaws.com/Prod/todo/' + this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/index');
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3 align="center">Update Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Person Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.todo_title}
                            onChange={this.onChangeTodoTitle}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit"
                            value="Update Business"
                            className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}