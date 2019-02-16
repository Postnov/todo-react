import React, {Component} from 'react';
import './todo-item.css';

export default class TodoItem extends Component {

	state = {
		done: false,
		important: false
	}

	onLabelClick = () => {
		this.setState(({done}) => {
			return {
				done: !done
			}
		})
	}

	markImportant = () => {
		this.setState(({important}) => {
			return {
				important: !important
			}
		})
	}

	render() {
		let {label, onDeleted} = this.props;
		let {done, important} = this.state;

		let classNames = 'todo-item';

		if(done) {
			classNames += ' done';
		}
		if(important) {
			classNames += ' important';
		}
		return (
			<span className={classNames}>
			<span
			  className="todo-item-label"
			  onClick={this.onLabelClick}
			  >
			  {label}
			</span>

			<button
				onClick={this.markImportant}
				type="button"
				className="btn btn-outline-success btn-sm float-right">
			  <i className="fa fa-exclamation" />
			</button>

			<button type="button"
					className="btn btn-outline-danger btn-sm float-right"
					onClick={onDeleted}>
			  <i className="fa fa-trash-o" />
			</button>
		  </span>
		);
	}
};