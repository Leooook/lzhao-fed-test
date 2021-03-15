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
