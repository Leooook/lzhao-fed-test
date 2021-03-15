import React, { Component } from 'react'

import Loader from './loader.jsx'
import Detail from './detail.jsx'

class Feature extends Component {
	state = {
		dataSet: [],
		dataAmount: 6
	}

	fetchData = () => {
		fetch('https://randomuser.me/api/', {
			method: 'GET'
		})
			.then((response) => response.json())
			.then((data) => {
				let dataSet = this.state.dataSet
				dataSet.push(data.results[0])
				this.setState({ dataSet })
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}

	componentDidMount() {
		for (let i = 0; i < this.state.dataAmount; i++) {
			this.fetchData()
		}
		console.log(this.state.dataSet.length)
		if (
			this.state.dataSet.length !== 0 &&
			this.state.dataSet.length % 6 === 0 &&
			this.props.newOne &&
			this.props.iconsDisplay === false
		) {
			console.log('asd')
			this.props.setIcons()
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
