import React, { Component } from 'react'
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
    this.setState({fthis.state.eatureAmount: [...featureAmount, 1]})
  }

  setIcons = () => {
    this.setState({iconsDisplay: !iconsDisplay})
  }

  render() {
    return (
      <div className='app'>
      <Header />
      {
        featureAmount.map((key) => <Feature key = {key} setIcons={() => setIcons()} />)
      }
      {
        iconsDisplay ? <BsCaretDownFill className='add-feature' onClick={() => setFeature()}/> : null
      }
    </div>
    );
  }
}

export default App;