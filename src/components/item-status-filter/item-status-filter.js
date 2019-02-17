import React, {Component} from 'react';
import './item-status-filter';

export default class ItemStatusFilter extends Component {


	state = {
		filterButtons: [
			{name: 'All', type: 'all', active: true,},
			{name: 'Active', type: 'active', active: false,},
			{name: 'Done', type: 'done', active: false,},
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
					key={el.name}
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
