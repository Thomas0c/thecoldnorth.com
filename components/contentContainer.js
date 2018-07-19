import React from 'react';
import glamorous from 'glamorous';

const ContentContainer = glamorous.div({
	width: '50%',
	minHeight: '30vh',
	position: 'relative',
	zIndex: 5,
	marginLeft: '2em',
	'@media(max-width: 1024px)': {
		width: '85%',
	}
});

export default ContentContainer;
