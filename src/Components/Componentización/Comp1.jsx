import React, { useState } from 'react';

const Comp1 = () => {
	const [counter, setCounter] = useState(0);

	const Comp2 = () => {
		const [counter2, setCounter2] = useState(0);

		return (
			<button onClick={() => setCounter2((prev) => prev + 1)}>
				{' '}
				Click {counter2} veces{' '}
			</button>
		);
	};

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
			<Comp2 />
		</div>
	);
};

export default Comp1;
