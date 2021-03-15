import React, { Component } from 'react'

class Feature extends Component {
	state = {
		dataSet: [],
		dataAmount: 10
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
		console.log(this.state.dataSet)
	}

	render() {
		return <div />
	}
}

export default Feature
