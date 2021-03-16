import React from 'react';

import loadPic from '../images/load.gif';

function Loader() {
	return (
		<section className="load">
			<img src={loadPic} className="loadPic" alt="load" />
		</section>
	);
}

export default Loader;
