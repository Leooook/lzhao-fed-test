import React, {useState} from 'react';
import {BsCaretDownFill} from 'react-icons/bs'

import './App.css'
import Header from './components/header.jsx'
import Feature from './components/feature.jsx'

export default function App() {
  const [featureAmount, setFeatureAmount] = useState([1]) 
  const [iconsDispaly, setIconsDisplay] = useState(false)

  const setFeature = () => {
    setFeatureAmount(featureAmount => {return [...featureAmount, 1]})
  }

  const setIcons = () => {
    setIconsDisplay(!setIconsDisplay)
  }

	return (
    <div className='app'>
      <Header />
      {
        featureAmount.map((key) => <Feature key = {key} setIcons={() => setIcons()} />)
      }
      {
        iconsDispaly ? <BsCaretDownFill className='add-feature' onClick={() => setFeature()}/> : null
      }
    </div>
  )
}
