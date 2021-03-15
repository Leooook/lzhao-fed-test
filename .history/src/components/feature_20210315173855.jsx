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
	}

	render() {
		if (this.state.dataSet.length === 0) {
			return <Loader />
		} else {
			return <section>{this.state.dataSet.map((each, key) => <Detail data={each} key={}/>)}</section>
		}
	}
}

export default Feature
