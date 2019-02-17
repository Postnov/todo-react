import React, {Component} from 'react';
import './add-todo.css'


export default class Add extends Component{

    state = {
        text: 'I love React'
    }



    render() {
        let {onAdded} = this.props;

        return (
            <button
                className="add-todo btn btn-outline-secondary"
                onClick={() => onAdded(this.state.text)}
            >
            Add item</button>
        )
    }
}