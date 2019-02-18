import React, { Component } from 'react';
import './search-panel.css';


export default class SearchPanel extends Component {


    render() {
        let {onSearch} = this.props;
        return (
            <input
                type="text"
                className="form-control search-panel"
                placeholder="Search"
                onChange={onSearch}/>
        );
    }

}