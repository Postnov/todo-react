import React from 'react';
import TodoItem from './todo-item';

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        return (
            <li>
                <TodoItem {...item}
                />
            </li>
        )
    })

    return (
        <ul>
            { elements }
        </ul>
    );
}

export default TodoList;