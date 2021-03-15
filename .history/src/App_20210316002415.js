import React, { Component } from 'react'
import { BsCaretDownFill } from 'react-icons/bs'

import './App.css'
import Header from './components/header.jsx'
import Feature from './components/feature.jsx'


class App extends Component {
  state = {
    featureAmount: [1],
    iconsDisplay: false
  }

  setFeature = () => {
		this.setState({featureAmount: [...this.state.featureAmount, this.state.featureAmount[this.state.featureAmount.length - 1] + 1]})
	}

	setIcons = () => {
    console.log(this.state.iconsDisplay)
		this.setState({iconsDisplay:!this.state.iconsDisplay})
    console.log(this.state.iconsDisplay,'asd')
	}

  render() {
    return (
        <div className="app">
			<Header />
			{this.state.featureAmount.map((key) => (
				<Feature key={key} newOne={key === this.state.featureAmount.length}setIcons={() => this.setIcons()} iconsDisplay={this.state.iconsDisplay} />
			))}
			{this.state.iconsDisplay ? (
				<BsCaretDownFill
					className="add-feature"
					onClick={() => {
            this.setIcons()
            this.setFeature()
					}}
				/>
			) : null}
		</div>
    );
  }
}

export default App;
