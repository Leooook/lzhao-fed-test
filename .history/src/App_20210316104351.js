/* eslint-disable prettier/prettier */
import React, { Component } from 'react'
import { BsCaretDownFill } from 'react-icons/bs'

import './App.css'
import Header from './components/header'
import Feature from './components/feature'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			featureAmount: [ 0 ],
			iconsDisplay: false
		}
	}

	// Triger for adding more features
	setFeature = () => {
		const { featureAmount } = this.state
		this.setState({ featureAmount: [ ...featureAmount, featureAmount[featureAmount.length - 1] + 1 ] })
	}

	// Triger for show & hide 'add more' button
	setIcons = () => {
		const { iconsDisplay } = this.state
		this.setState({ iconsDisplay: !iconsDisplay })
	}

	render() {
		const { featureAmount, iconsDisplay } = this.state

		return (
			<div className="app">
				<Header />
				{featureAmount.map((each => (
					<Feature
						key={each.id}
						newOne={key.id === featureAmount.length - 1}
						setIcons={this.setIcons}
						iconsDisplay={iconsDisplay}
					/>
				))}
				{iconsDisplay ? (
					<BsCaretDownFill
						className="add-feature"
						onClick={() => {
							this.setIcons()
							this.setFeature()
						}}
					/>
				) : null}
			</div>
		)
	}
}

export default App
