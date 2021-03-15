import React, { Component } from 'react'

class Feature extends Component {
	state = {
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
				console.log(data.info)
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}

	componentDidMount() {
		this.fetchData()
	}

	render() {
		return <div />
	}
}

export default Feature
