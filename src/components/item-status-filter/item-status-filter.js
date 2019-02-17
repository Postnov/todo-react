import React, {Component} from 'react';
import './item-status-filter';

export default class ItemStatusFilter extends Component {


	state = {
		filterButtons: [
			{name: 'All', type: 'all', active: true, id: 1},
			{name: 'Active', type: 'active', active: false, id: 2},
			{name: 'Done', type: 'done', active: false, id: 3},
		]
	};

	render() {
		let {onFilterItems, filter} = this.props;

		const buttons = this.state.filterButtons.map((el) => {

			let className = 'btn';

			if (el.type === filter) {
				className += ' btn-info';
			}else {
				className += ' btn-outline-secondary';
			}

			return (
				<button
					key={el.id}
					type="button"
					className={className}
					onClick={() => onFilterItems(el.type)}
					>{el.name}</button>
			);
		})

		return (
			<div className="btn-group">
				{ buttons }
			</div>
		);
	}
}
