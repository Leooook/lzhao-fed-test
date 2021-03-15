import React, { Component } from 'react'

class Feature extends Component {
	state = {
		dataSet: [],
		dataAmount: 5,
		header: new Headers({
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'text/plain'
		})
	}

	fetchData = () => {
		fetch('https://randomuser.me/api/', {
			method: 'GET',
			headers: this.state.header,
			mode: 'cors'
		})
			.then((response) => response.json())
			.then((data) => {
        const dataSet = this.state.dataSet.push(data.results[0])
				return data.results[0]
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}

	componentDidMount() {
		for (let i = 0; i < this.state.dataAmount; i++) {
			console.log(this.fetchData())
			const dataSet = this.dataSet.push(0)
		
		}
	}

	render() {
		return <div />
	}
}

export default Feature
