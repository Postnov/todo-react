import React from 'react';
import TodoItem from '../todo-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted,
     onToggleImportant, onToggleDone }) => {

    const elements = todos.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <li key={id} className="list-group-item">
                <TodoItem
                    { ...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                />
            </li>
        )
    })

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
}

export default TodoList;