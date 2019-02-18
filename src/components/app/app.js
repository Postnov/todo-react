import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddTodo from '../add-todo';

import './app.css';

export default class App extends Component {

    lastId = 100;

    state = {
        todoData: [
            this.createTodo('Drink cofee'),
            this.createTodo('Build react App'),
            this.createTodo('Learn react')
        ],
        viewsTodo: [
            this.createTodo('Drink cofee'),
            this.createTodo('Build react App'),
            this.createTodo('Learn react')
        ],
        searchQuery: '',
        filter: 'all'
    }

    createTodo(label) {
        return {
            label: label,
            id: this.lastId++,
            important: false,
            done: false
        }
    }

    removeTodo = (id) => {
        let {todoData} = this.state;
        let filterData = todoData.filter((el) => el.id !== id);

        this.setState({todoData: filterData});
    }

    addTodo = (label) => {

        let {todoData} = this.state;

        let newItem = this.createTodo(label);

        let newArray = [
            ...todoData,
            newItem
        ];


        this.setState({todoData: newArray})
    }

    toggleProperty(arr, id, propName) {
        let newArray = arr.map((el) => {
            if (el.id === id) el[propName] = !el[propName];
            return el;
        });

        return newArray;
    }

    onToggleImportant = (id) => {
        let {todoData} = this.state;

        let newArray = this.toggleProperty(todoData, id, 'important');

        this.setState({todoData: newArray});
    };

    onToggleDone = (id) => {
        let {todoData} = this.state;

        let newArray = this.toggleProperty(todoData, id, 'done');

        this.setState({todoData: newArray});
    };

    filterItems = (items, filter) => {

        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((el) => el.done === false);
            case 'done':
                return items.filter((el) => el.done === true);
            default:
                return items;
        }
    }

    searchFilter = (items, query) => {

        let newArray = items.filter((el) => {
            return el.label.toLowerCase().indexOf(query.toLowerCase()) !== -1
        });

        return newArray;
    };

    onFilterChange = (type) => {
        this.setState({
            filter: type,
            viewsTodo: this.filterItems(this.state.todoData, type)
        })
    };

    onSearchChange = (query) => {
        this.setState({
            searchQuery: query,
            viewsTodo: this.searchFilter(this.state.todoData, query)
        })
    }

    render() {
        let {todoData, filter, viewsTodo} = this.state
        let doneCount = todoData.filter((el) => el.done).length;
        let todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel
                        onSearch={this.onSearchChange}/>
                    <ItemStatusFilter
                        onFilterItems={this.onFilterChange}
                        filter={filter}
                     />
                </div>
                <TodoList
                    onDeleted={this.removeTodo}
                    todos={viewsTodo}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                 <AddTodo
                    onAdded={this.addTodo} />
            </div>
        )
    }
}