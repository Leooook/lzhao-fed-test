import React, { Component } from 'react'

class Feature extends Component {

fetchData = () => {
  fetch(this.state.url, {
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
