import React from 'react';
import glamorous from 'glamorous';

const Text = glamorous.p({
	fontSize: 14,
	color: '#FFF',
	fontFamily: 'Helvetica',
	fontWeight: 200,
	letterSpacing: 0.5,
	lineHeight: 1.8,
	'@media(max-device-width: 640px)': {
		fontSize: 14,
		marginTop: 20
	}
});

export default Text;
