import React, {useState} from 'react';

import './App.css'
import Header from './components/header.jsx'
import Feature from './components/feature.jsx'

export default function App() {
  const [featureAmount, addFeatureAmount] = useState([1]) 

  const addFeature = () => {
    addFeatureAmount(featureAmount.push(1))
    console.log(featureAmount)
  }
  
	return (
    <div className='app'>
      <Header />
      {
        featureAmount.map((key) => <Feature key = {key}/>)
      }
      <button className='add-feature' onClick={() => addFeature()}/>
    </div>
  )
}
