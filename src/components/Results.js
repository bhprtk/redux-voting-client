import React, { Component } from 'react';

class Results extends Component {
	constructor(props) {
		super(props);

	}

	getVotes(entry) {
		const { tally } = this.props;
		if(tally && tally.has(entry)) {
			return tally.get(entry);
		}
		return 0;
	}

	render() {
		const { pair } = this.props;
		console.log ('pair:', pair)
		return (
			<div className="results">
				{pair.map(entry =>
					<div key={entry} className="entry">
						<h1>{entry}</h1>
						<div className="voteCount">
							{this.getVotes(entry)}
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default Results;
