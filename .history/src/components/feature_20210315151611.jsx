import React, { Component } from 'react'

class Feature extends Component {
	state = {
    dataSet = [],
    dataAmount = 5,
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
				console.log(data.results[0])
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}

	componentDidMount() {
    for (i = 0; i< ) 
		this.fetchData()
	}

	render() {
		return <div />
	}
}

export default Feature
