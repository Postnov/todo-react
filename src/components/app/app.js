import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

export default class App extends Component {

    constructor() {
        super();

        this.state = {
            todoData: [
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
        }

        this.removeTodo = (id) => {
            let {todoData} = this.state;
            let filterData = todoData.filter((el) => el.id != id);

            this.setState({
                todoData: filterData
            });
        }
    }


    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={3} done={1}/>
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    onDeleted={this.removeTodo}
                    todos={this.state.todoData}/>
            </div>
        )
    }
}