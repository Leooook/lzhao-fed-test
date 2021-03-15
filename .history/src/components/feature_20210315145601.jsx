import React, { Component } from 'react'

class Feature extends Component {
  state = {
		url: 'http://127.0.0.1:5000/',
		data: undefined,
		date: undefined,
		time: 'default',
		method: '/Average',
		sort: 'Price',
		down: true,
		icons: [ ...[ 'show' ], ...[ ...Array(7).fill('not-show') ] ],
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
      this.setState({ data })
    })
    .catch((error) => {
      console.error('Error:', error)
    })
  fetch(this.state.url + 'Date', {
    method: 'GET',
    headers: this.state.header,
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((date) => {
      this.setState({ date })
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
}





	render() {
		return <div />
	}
}

export default Feature
