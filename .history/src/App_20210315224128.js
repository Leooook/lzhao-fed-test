import React, { Component } from 'react';
import {BsCaretDownFill} from 'react-icons/bs'

import './App.css'
import Header from './components/header.jsx'
import Feature from './components/feature.jsx'

class App extends Component {
  state = {
    featureAmount: [1],
    iconsDisplay: false
  }

  setFeature = () => {
    this.setState({featureAmount: [...this.state.featureAmount, 1]})
  }

  setIcons = () => {
    console.log()
    this.setState({iconsDisplay: !this.state.iconsDisplay})
  }

  render() {
    return (
      <div className='app'>
      <Header />
      {
        this.state.featureAmount.map((key) => <Feature key = {key} setIcons={this.state.setIcons} />)
      }
      {
        this.state.iconsDisplay ? <BsCaretDownFill className='add-feature' onClick={() => this.state.setFeature()}/> : null
      }
    </div>
    );
  }
}

export default App;