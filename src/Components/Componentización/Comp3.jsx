import React, { useState } from 'react';

const Comp3 = () => {
	const [counter3, setCounter3] = useState(0);

	return (
		<button onClick={() => setCounter3((prev) => prev + 1)}>
			Click {counter3} veces
		</button>
	);
};
export default Comp3;
