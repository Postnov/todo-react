import React from 'react';
import TodoItem from './todo-item';

const TodoList = () => {
    return (
        <ul>
            <li><TodoItem label="Drink Cofee"/></li>
            <li>
                <TodoItem
                    label="Learn react"
                    important
                />
            </li>
        </ul>
    );
}

export default TodoList;