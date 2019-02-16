import React from 'react';
import './todo-item.css';

const TodoItem = ({label, important = false}) => {
    const style = {
        color: important ? 'steelblue' : null,
        fontWeight: important ? 'bold' : 'normal'
    }
    return (
        <span className="todo-item">
        <span
          className="todo-item-label"
          style={style}>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
}

export default TodoItem;