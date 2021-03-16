import React, { Component } from 'react'

import Loader from './loader.jsx'
import Detail from './detail.jsx'

class Feature extends Component {
	state = {
		dataSet: [],
		dataAmount: 6
	}

	// fetch data from url
	fetchData = () => {
		fetch('https://randomuser.me/api/', {
			method: 'GET',
			headers: this.state.header,
			mode: 'cors',
			header: new Headers({
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'text/plain'
			})
		})
			.then((response) => response.json())
			.then((data) => {
				let dataSet = this.state.dataSet
				dataSet.push(data.results[0])
				this.setState({ dataSet })

				// after fetched data, show 'add more button'
				if (
					this.state.dataSet.length !== 0 &&
					this.state.dataSet.length % 6 === 0 &&
					this.props.newOne &&
					this.props.iconsDisplay === false
				) {
					this.props.setIcons()
				}
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}

	componentDidMount() {
		// Fetch 6 datas each time
		for (let i = 0; i < this.state.dataAmount; i++) {
			this.fetchData()
		}
	}

	render() {
		if (this.state.dataSet.length === 0 || this.state.dataSet.length % 6 !== 0) {
			return <Loader />
		} else {
			return (
				<section className="feature">
					{this.state.dataSet.map((each, key) => <Detail key={key} data={each} />)}
				</section>
			)
		}
	}
}

export default Feature
