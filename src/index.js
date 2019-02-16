import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

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
        <div>
            <AppHeader toDo={3} done={1}/>
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));