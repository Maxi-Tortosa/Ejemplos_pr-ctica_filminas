import React, { useEffect } from 'react';

const Loading = () => {
	useEffect(() => {
		console.log('Loading Montado');
		return () => console.log('Loading Desmontado');
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
			Loading
		</div>
	);
};

export default Loading;
