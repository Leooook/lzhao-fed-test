import React, { Component } from 'react';
import {BsCaretDownFill} from 'react-icons/bs'

import './App.css'
import Header from './components/header.jsx'
import Feature from './components/feature.jsx'

export default function App() {


	return (
    
  )
}

import React,  from 'react';

class App extends Component {
  state = {
    featureAmount: [1],
    iconsDisplay: false
  }

  setFeature = () => {
    this.setState({featureAmount: [...featureAmount, 1]})
  }

  setIcons = () => {
    this.setState({iconsDisplay: !iconsDisplay})
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;