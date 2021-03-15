import React, { useState } from 'react'
import { BsCaretDownFill } from 'react-icons/bs'

import './App.css'
import Header from './components/header.jsx'
import Feature from './components/feature.jsx'

export default function App() {
	const [ featureAmount, setFeatureAmount ] = useState([ 1 ])
	const [ iconsDisplay, setIconsDisplay ] = useState(false)

	const setFeature = () => {
		setFeatureAmount((featureAmount) => {
			return [ ...featureAmount, featureAmount[] ]
		})
	}

	const setIcons = () => {
		console.log(iconsDisplay, 'asd')
		let a = iconsDisplay
		setIconsDisplay(!a)
		console.log(iconsDisplay)
	}

	return (
		<div className="app">
			<Header />
			{featureAmount.map((each, key) => (
				<Feature key={key} setIcons={() => setIcons()} iconsDisplay={iconsDisplay} />
			))}
			{iconsDisplay ? (
				<BsCaretDownFill
					className="add-feature"
					onClick={() => {
						setFeature()
						setIcons()
					}}
				/>
			) : null}
		</div>
	)
}
