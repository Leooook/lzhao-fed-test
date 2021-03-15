import React, {useState, useRef} from 'react';
import {BsCaretDownFill} from 'react-icons/bs'

import './App.css'
import Header from './components/header.jsx'
import Feature from './components/feature.jsx'

export default function App() {
  const [featureAmount, setFeatureAmount] = useState([1]) 
  const iconsDisplay = useRef(true)

  const setFeature = () => {
    setFeatureAmount(featureAmount => {return [...featureAmount, 1]})
  }

  const setIcons = () => {
    if (iconsDisplay.current) {
      iconsDisplay.current = false
    }
    else {
      iconsDisplay.current = true
    }


  }

	return (
    <div className='app'>
      <Header />
      {
        featureAmount.map((key) => <Feature key = {key} setIcons={() => setIcons()} />)
      }
      {
        iconsDisplay.current ? <BsCaretDownFill className='add-feature' onClick={() => setFeature()} /> : null
      }
    </div>
  )
}
