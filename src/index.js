import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
    return <h1>My todo list</h1>;
}

const SearchPanel = () => {
    return <input  placeholder="Search"/>;
}

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build awesome app</li>
        </ul>
    );
}


const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));