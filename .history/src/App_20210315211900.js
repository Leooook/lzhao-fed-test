import React, {useState} from 'react';
import {BiChevronDownCircle} from 'react-icons/bi'

import './App.css'
import Header from './components/header.jsx'
import Feature from './components/feature.jsx'

export default function App() {
  const [featureAmount, setFeatureAmount] = useState([1]) 

  const setFeature = () => {
    setFeatureAmount(featureAmount => {return [...featureAmount, 1]})
  }

	return (
    <div className='app'>
      <Header />
      {
        featureAmount.map((key) => <Feature key = {key}/>)
      }
      <BiChevronDoubleDown className='add-feature' onClick={() => setFeature()}/>
    </div>
  )
}
