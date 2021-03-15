import React, { Component } from 'react';
import {BsCaretDownFill} from 'react-icons/bs'

import './App.css'
import Header from './components/header.jsx'
import Feature from './components/feature.jsx'

export default function App() {


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
  )
}

import React,  from 'react';

class App extends Component {
  state = {
    featureAmount: [1],
    iconsDisplay: false
  }

  
  const setFeature = () => {
    setFeatureAmount(featureAmount => {return [...featureAmount, 1]})
  }

  const setIcons = () => {
    setIconsDisplay(true)
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;