import React, {useState, useEffect} from 'react';
import {BsCaretDownFill} from 'react-icons/bs'

import './App.css'
import Header from './components/header.jsx'
import Feature from './components/feature.jsx'

export default function App() {
  const [featureAmount, setFeatureAmount] = useState([1]) 
  const [iconsDisplay, setIconsDisplay] = useState(false)

  const setFeature = () => {
    setFeatureAmount(featureAmount => {return [...featureAmount, 1]})
  }

  const setIcons = () => {
    console.log(iconsDisplay,'asd')
    setIconsDisplay(!)
    console.log(iconsDisplay)
  }

  useEffect(() => {setIcons()})


	return (
    <div className='app'>
      <Header />
      {
        featureAmount.map((key) => <Feature key = {key} setIcons={() => setIcons()} iconsDisplay = {iconsDisplay} />)
      }
      {
        iconsDisplay ? <BsCaretDownFill className='add-feature' onClick={() => {setFeature() 
          setIcons()}} /> : null
      }
    </div>
  )
}
