import React, {Component} from 'react';
import './add-todo.css'


export default class Add extends Component{

    state = {
        text: ''
    }

    onInputChange = (e) => {
        this.setState({ text: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdded(this.state.text);
        this.setState({text: ''});
    }

    render() {
        let {text} = this.state;
        return (
            <form
                className="add-todo d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control"
                    value={text}
                    onChange={this.onInputChange}
                    placeholder="Enter you task in here"/>
                <button
                    className="btn btn-outline-secondary"
                    >
                Add item</button>
            </form>
        )
    }
}