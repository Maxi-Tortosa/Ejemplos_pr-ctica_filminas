import React, { useState } from 'react';

import Comp3 from './Comp3';

const Comp2 = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div
			style={{
				width: '50%',
				margin: '0 auto',
				border: '1px solid yellow',
				padding: '20px',
			}}>
			<h3>Componente 1</h3>
			<button onClick={() => setCounter((prev) => prev + 1)}>
				Click: {counter} veces
			</button>

			<h3>Componente 2</h3>
			<Comp3 />
		</div>
	);
};

export default Comp2;
