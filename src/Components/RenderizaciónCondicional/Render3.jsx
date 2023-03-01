import React, { useState } from 'react';

import Loaded from './Loaded';
import Loading from './Loading';

const Render3 = () => {
	const [condition, setCondition] = useState(true);
	return (
		<>
			<div style={{ width: '10%', margin: '0 auto 20px auto' }}>
				<button onClick={() => setCondition(!condition)}>
					Cambiar condition
				</button>
			</div>
			{condition ? <Loading /> : <Loaded />}
		</>
	);
};

export default Render3;
