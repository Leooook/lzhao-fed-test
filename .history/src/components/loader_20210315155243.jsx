import React from 'react'

import loadPic from './loader'

function Loader() {
	return (
		<section className="load">
			<img src={loadPic} className="loadPic" alt="load" />
		</section>
	)
}

export default Loader
