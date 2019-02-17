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
        ]
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
        let filterData = todoData.filter((el) => el.id != id);

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

    onToggleImportant = (id) => {
        let {todoData} = this.state;

        let newArray = todoData.map((el) => {
            if (el.id == id) el.important = !el.important;
            return el;
        });

        this.setState({todoData: newArray});
    };

    onToggleDone = (id) => {
        let {todoData} = this.state;

        let newArray = todoData.map((el) => {
            if (el.id == id) el.done = !el.done;
            return el;
        });

        this.setState({todoData: newArray});
    };


    render() {
        let {todoData} = this.state
        let doneCount = todoData.filter((el) => el.done).length;
        let todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    onDeleted={this.removeTodo}
                    todos={todoData}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                 <AddTodo
                    onAdded={this.addTodo} />
            </div>
        )
    }
}