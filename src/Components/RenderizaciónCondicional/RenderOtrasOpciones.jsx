import React from 'react';

const RenderOtrasOpciones = ({ condition = true, other = true }) => {
	const config = condition
		? { className: 'yellowClass', title: 'Soy un title' }
		: {};

	return (
		<div style={{ width: '20%', margin: '0 auto 20px auto' }}>
			{/* <h1> En el atributo style</h1>
			<h2 style={{ color: condition ? 'yellow' : 'blue' }}>Loading ...</h2>

			<h1> En el atributo className</h1>
			<h2 className={`${condition ? 'blueClass' : 'yellowClass'}`}>
				Loading ...
			</h2> */}

			{/* <h2
				className={`${condition ? 'yellowClass' : 'blueClass'} ${other || ''}`}>
				Loading ...
			</h2> */}

			{/* <h2
				className={`${condition ? 'yellowClass' : 'blueClass'} ${
					other && 'otherClass'
				}`}>
				Loading ...
			</h2> */}
			<h2 {...config}>Loading ...</h2>
		</div>
	);
};

export default RenderOtrasOpciones;
