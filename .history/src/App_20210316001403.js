import React, { Component } from 'react'
import { BsCaretDownFill } from 'react-icons/bs'

import './App.css'
import Header from './components/header.jsx'
import Feature from './components/feature.jsx'


class App extends Component {
  state = {
    featureAmount: [0],
    iconsDisplay: false
  }

  setFeature = () => {
		this.setState({featureAmount: [...this.state.featureAmount, this.state.featureAmount[this.state.featureAmount.length - 1] + 1]})
	}

	setIcons = () => {
		this.setState(!this.state.iconsDisplay)
	}

  render() {
    return (
      <div>
        <div className="app">
			<Header />
			{featureAmount.map((key) => (
				<Feature key={key} setIcons={() => setIcons()} iconsDisplay={iconsDisplay} />
			))}
			{iconsDisplay ? (
				<BsCaretDownFill
					className="add-feature"
					onClick={() => {
						setFeature()
						setIcons()
					}}
				/>
			) : null}
		</div>
      </div>
    );
  }
}

export default App;
