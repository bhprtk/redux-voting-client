import React, { Component } from 'react';
import { connect } from 'react-redux';
import Winner from './Winner';

export class Results extends Component {
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
		return (
			this.props.winner ?
			<Winner ref="winner" winner={this.props.winner} /> :
			<div className="results">
				<div className="tally">
					{pair.map(entry =>
						<div key={entry} className="entry">
							<h1>{entry}</h1>
							<div className="voteCount">
								{this.getVotes(entry)}
							</div>
						</div>
					)}
				</div>
				<div className="management">
					<button
						ref="next"
						className="next"
						onClick={this.props.next}>
						Next
					</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		pair: state.getIn(['vote', 'pair']),
		tally: state.getIn(['vote', 'tally']),
		winner: state.get('winner')
	};
}

export const ResultsContainer = connect(mapStateToProps)(Results);
