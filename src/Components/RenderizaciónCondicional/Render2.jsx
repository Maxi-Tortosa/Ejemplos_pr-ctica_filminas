import Loaded from './Loaded';
import Loading from './Loading';
import React from 'react';

const Render2 = ({ condition = false }) => {
	return (
		<>
			{condition && <Loading />}
			{!condition && <Loaded />}
		</>
	);
};

export default Render2;
