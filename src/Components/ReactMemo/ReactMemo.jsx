import React from 'react';

const ReactMemo = React.memo(
	({ item }) => {
		return (
			<div style={{ width: '20%', margin: '0 auto 20px auto' }}>
				<h1 style={{ textAlign: 'center', color: 'blue' }}>{item.id}</h1>
			</div>
		);
	},
	(viejas, nuevas) => viejas.item.modifyDate === nuevas.item.modifyDate
);
export default ReactMemo;
