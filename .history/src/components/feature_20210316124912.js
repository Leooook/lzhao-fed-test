import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
		const { dataAmount } = this.state;
		for (let i = 0; i < dataAmount; i += 1) {
			this.fetchData();
		}
	}

	// fetch data from url
	fetchData = () => {
		fetch('https://randomuser.me/api/', {
			method: 'GET',
			mode: 'cors',
			header: {['Access-Control-Allow-Origin': '*']})
		})
			.then(response => response.json())
			.then(data => {
				const { dataSet } = this.state;
				dataSet.push(data.results[0]);
				this.setState({ dataSet });

				// after fetched data, show 'add more button'
				const { newOne, iconsDisplay, setIcons } = this.props;
				if (dataSet.length !== 0 && dataSet.length % 6 === 0 && newOne && iconsDisplay === false) {
					setIcons();
				}
			});
	};

	render() {
		const { dataSet } = this.state;
		if (dataSet.length === 0 || dataSet.length % 6 !== 0) {
			return <Loader />;
		}
		return (
			<section className="feature">
				{dataSet.map((each, key) => {
					const id = (dataSet.length % 6) + key;
					return <Detail key={id} data={each} />;
				})}
			</section>
		);
	}
}

Feature.propTypes = {
	newOne: PropTypes.bool.isRequired,
	iconsDisplay: PropTypes.bool.isRequired,
	setIcons: PropTypes.func.isRequired
};

export default Feature;
