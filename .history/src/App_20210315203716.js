import React, {useState} from 'react';

import './App.css'
import Header from './components/header.jsx'
import Feature from './components/feature.jsx'

export default function App() {
  const [featureAmount, addFeatureAmount = useState([1]) 
  const addFeature = () => {

  }
	return (
    <div className='app'>
      <Header />
      <Feature />
      <div >
    </div>
  )
}
