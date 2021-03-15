import React, {use} from 'react';

import './App.css'
import Header from './components/header.jsx'
import Feature from './components/feature.jsx'

export default function App() {
	return (
    <div className='app'>
      <Header />
      <Feature />
    </div>
  )
}
