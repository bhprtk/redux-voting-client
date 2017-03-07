import React, { Component } from 'react';

class Voting extends Component {

	render() {
		const { pair } = this.props;
		return (
			<div className="voting">
				{pair.map(entry => {
					return (
						<button key={entry}>
							<h1>{entry}</h1>
						</button>
					)
				})}
			</div>
		)
	}
}

export default Voting;
