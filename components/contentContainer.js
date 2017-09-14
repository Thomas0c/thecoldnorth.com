import React from 'react';
import glamorous from 'glamorous';

const ContentContainer = glamorous.div({
	width: '50%',
	maxWidth: '600px',
	minHeight: '30vh',
	margin: '0 auto',
	position: 'relative',
	zIndex: 5,
	'@media(max-device-width: 640px)': {
		width: '85%',
		maxWidth: '85%'
	}
});

export default ContentContainer;
