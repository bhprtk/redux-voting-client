import React, { Component } from 'react';
import { connect } from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';

export class Voting extends Component {
	render() {
		const { pair, winner } = this.props;
		return (
			<div>
				{winner ?
					<Winner ref="winner" winner={winner}/> :
					<Vote {...this.props} />}
			</div>
		)
	}
};

function mapStateToProps(state) {
	return {
		pair: state.getIn(['vote', 'pair']),
		winner: state.get('winner')
	};
}

export const VotingContainer = connect(mapStateToProps)(Voting);
