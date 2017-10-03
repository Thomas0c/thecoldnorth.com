import React from 'react';
import glamorous from 'glamorous';

const Logo = glamorous.div({
	color: '#FFD186',
	position: 'relative',
	fontSize: 20,
	fontFamily: 'Playfair Display',
	cursor: 'pointer',
	padding: '2rem'
});

export default () => {
	return (
		<Logo>
			the<br />
			<b>cold north</b>
		</Logo>
	);
};
