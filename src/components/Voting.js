import React, { Component } from 'react';
import Winner from './Winner';
import Vote from './Vote';

class Voting extends Component {
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

export default Voting;
