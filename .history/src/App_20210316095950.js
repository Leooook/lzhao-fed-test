import React, { Component } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';

import './App.css';
import Header from './components/header';
import Feature from './components/feature';

class App extends Component {
	state = {
		featureAmount: [1],
		iconsDisplay: false
	};

	// Triger for adding more features
	setFeature = () => {
    const featureAmount = [...this.state.featureAmount, this.state.featureAmount[this.state.featureAmount.length - 1] + 1]
		this.setState({featureAmount}});
	};

	// Triger for show & hide 'add more' button
	setIcons = () => {
		this.setState({ iconsDisplay: !this.state.iconsDisplay });
	};

	render() {
		return (
			<div className="app">
				<Header />
				{this.state.featureAmount.map(key => (
					<Feature
						key={key}
						newOne={key === this.state.featureAmount.length}
						setIcons={this.setIcons}
						iconsDisplay={this.state.iconsDisplay}
					/>
				))}
				{this.state.iconsDisplay ? (
					<BsCaretDownFill
						className="add-feature"
						onClick={() => {
							this.setIcons();
							this.setFeature();
						}}
					/>
				) : null}
			</div>
		);
	}
}

export default App;
