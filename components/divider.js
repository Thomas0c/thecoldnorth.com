import React from 'react';
import glamorous from 'glamorous';

const Divider = glamorous.div({
	height: 1,
	marginTop: '15px',
	width: '60%',
	background: '#8A8F93',
	'@media(max-device-width: 640px)': {
		width: '100%',
		marginTop: '20px'
	}
});

export default Divider;
