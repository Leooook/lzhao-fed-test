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

	// fetch data from url
	fetchData = () => {
		fetch('https://randomuser.me/api/', {
			method: 'GET',
			mode: 'cors',
			header: new Headers({
				'Access-Control-Allow-Origin': '*'
			})
		})
			.then(response => response.json())
			.then(data => {
				const { dataSet } = this.state;
				dataSet.push(data.results[0]);
				this.setState({ dataSet });

				// after fetched data, show 'add more button'
        const {dataSet} = this.state
				if (
					this.state.dataSet.length !== 0 &&
					this.state.dataSet.length % 6 === 0 &&
					this.props.newOne &&
					this.props.iconsDisplay === false
				) {
					this.props.setIcons();
				}
			})
			.catch(error => {
				console.error('Error:', error);
			});
	};

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
