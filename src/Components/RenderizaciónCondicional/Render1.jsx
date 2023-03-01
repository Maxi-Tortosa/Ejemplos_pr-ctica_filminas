import Loaded from './Loaded';
import Loading from './Loading';
import React from 'react';

const Render1 = ({ condition = false }) => {
	if (condition) {
		return <Loading />;
	}
	return <Loaded />;
};

export default Render1;
