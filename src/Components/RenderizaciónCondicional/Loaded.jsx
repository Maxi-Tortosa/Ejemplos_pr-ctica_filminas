import React, { useEffect } from 'react';

const Loaded = () => {
	useEffect(() => {
		console.log('Loaded Montado');

		return () => {
			console.log('Loaded Desmontado');
		};
	}, []);

	return (
		<div
			style={{
				fontSize: 24,
				width: '50%',
				margin: '0 auto',
				border: '1px solid yellow',
				padding: '20px',
			}}>
			Loaded
		</div>
	);
};

export default Loaded;
