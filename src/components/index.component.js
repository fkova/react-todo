import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { todo: [] };
    }
    componentDidMount() {
        axios.get('https://tbi50kh7ll.execute-api.us-east-2.amazonaws.com/Prod/todo/849f17b0-cfe5-11e9-8d59-f1eee5570d5c')
            .then(response => {
                console.log(response);
                this.setState({ todo: [response.data] });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        return this.state.todo.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Business List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Todo Title</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}