import React, { Component } from 'react';

import Loader from './loader';
import Detail from './detail';

class Feature extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSet: [],
			dataAmount: 6
		};
	}

	componentDidMount() {
		// Fetch 6 datas each time
		for (let i = 0; i < this.state.dataAmount; i++) {
			this.fetchData();
		}
	}

	render() {
		if (this.state.dataSet.length === 0 || this.state.dataSet.length % 6 !== 0) {
			return <Loader />;
		}
		return (
			<section className="feature">
				{this.state.dataSet.map((each, key) => (
					<Detail key={key} data={each} />
				))}
			</section>
		);
	}
}

export default Feature;
