import React, { Component } from 'react';

class Vote extends Component {

	constructor(props) {
		super(props);

		this.isDisabled = this.isDisabled.bind(this);
		this.hasVotedFor = this.hasVotedFor.bind(this);
	}
	
	isDisabled() {
		return !!this.props.hasVoted;
	}

	hasVotedFor(entry) {
		return this.props.hasVoted === entry;
	}

	render() {
		const { pair } = this.props;
		return (
			<div className="voting">
				{pair.map(entry => {
						return (
							<button
								key={entry}
								disabled={this.isDisabled()}
								onClick={() => this.props.vote(entry)}>
								<h1>{entry}</h1>
								{this.hasVotedFor(entry) ?
										<div className="label">Voted</div> :
										null}
							</button>
						)
					})}
			</div>
		)
	}
};

export default Vote;
