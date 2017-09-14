import React from 'react';
import glamorous from 'glamorous';

const SectionTitle = glamorous.p({
	fontSize: 32,
	color: '#FFF',
	lineHeight: 1,
	marginBottom: '55px',
	fontFamily: 'Playfair Display',
	'@media(max-device-width: 640px)': {
		marginBottom: '40px'
	}
});

export default SectionTitle;
