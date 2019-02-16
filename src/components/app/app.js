import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {

    const todoData = [
        {
            label: 'Drink cofee',
            important: false,
            id: 1
        },
        {
            label: 'Build react App',
            important: true,
            id: 2
        },
        {
            label: 'Learn react',
            important: true,
            id: 3
        },
    ]

    return (
        <div className="todo-app">
            <AppHeader toDo={3} done={1}/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData}/>
        </div>
    )
}

export default App;