import React, {Component} from 'react';
import './add-todo.css'


export default class Add extends Component{

    state = {
        text: 'I love React'
    }



    render() {
        let {onAdded} = this.props;

        return (
            <form className="add-todo d-flex">
                <input
                    type="text"
                    className="form-control"
                    onChange={this.onInputChange}
                    placeholder="Enter you task in here"/>
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => onAdded(this.state.text)}>
                Add item</button>
            </form>
        )
    }
}